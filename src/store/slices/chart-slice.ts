/* eslint-disable no-param-reassign */

// Redux
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Options, YAxis } from '../../types/options';
import { Parameter } from '../../types/parameter';
import { Point } from '../../types/point';

// Colors
import { COLORS } from '../../config/colors';

// Utilites
import { getPropValues } from '../../utilities';

const initialState: Options = {
  color: COLORS,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: 'left',
    left: 'center',
    show: true
  },
  legend: {
    show: false,
    selected: {}
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    data: []
  },
  yAxis: [{ show: false, offset: 0 }],
  series: []
};

const chartSlice = createSlice({
  name: 'chartConfig',
  initialState,
  reducers: {
    addData: (state, action) => {
      const { payload } = action;

      const { grid, xAxis } = state;

      grid.left = `${payload.length * 100}px`;

      xAxis.data = payload[0].points.map((point: Point) => point.d);

      state.yAxis = [
        ...state.yAxis,
        ...payload.map((param: Parameter, index: number) => ({
          type: 'value',
          name: param.description,
          position: 'left',
          alignTicks: true,
          offset: index * 100,
          axisLine: {
            show: true,
            lineStyle: {
              color: COLORS[index]
            }
          },
          axisLabel: {
            formatter: `{value} ${param.unit}`
          }
        }))
      ];

      state.series = payload.map((param: Parameter, index: number) => ({
        name: param.description,
        type: 'line',
        yAxisIndex: index + 1,
        data: param.points.map((point) => point.v)
      }));
    },
    setOptions: (state, action) => {
      const { payload } = action;

      const optionValue = getPropValues(state, ...payload.option);

      optionValue[payload.key] = payload.value;
    },
    switchYAxis: (state, action) => {
      const { payload } = action;

      const { grid, yAxis } = state;
      const { selected } = state.legend;

      const shift: number = payload.visible ? -100 : 100;

      const index: number = yAxis.findIndex(
        (item: YAxis) => item.name === payload.name
      );

      grid.left = `${parseInt(grid.left, 10) + shift}px`;

      yAxis[index].show = !payload.visible;

      for (let i = index + 1; i < yAxis.length; i += 1) {
        yAxis[i].offset += shift;
      }

      selected[payload.name] = !payload.visible;
    }
  }
});

export const { addData, setOptions, switchYAxis } = chartSlice.actions;

export default chartSlice.reducer;
