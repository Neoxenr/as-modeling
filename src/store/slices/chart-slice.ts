/* eslint-disable no-param-reassign */

// Redux
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Options } from '../../types/chart/options';
import { Parameter } from '../../types/chart/parameter';
import { Point } from '../../types/chart/point';

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
    left: '30%',
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
  yAxis: [{ show: false }],
  series: []
};

const chartSlice = createSlice({
  name: 'chartConfig',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.xAxis.data = action.payload[0].points.map(
        (point: Point) => point.d
      );

      state.yAxis = [
        ...state.yAxis,
        ...action.payload.map((param: Parameter, index: number) => ({
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

      state.series = action.payload.map((param: Parameter, index: number) => ({
        name: param.description,
        type: 'line',
        yAxisIndex: index + 1,
        data: param.points.map((point) => point.v)
      }));
    },
    setOption: (state, action) => {
      const { payload } = action;

      const optionValue = getPropValues(state, ...payload.option);

      optionValue[payload.key] = payload.value;
    }
  }
});

export const { addData, setOption } = chartSlice.actions;

export default chartSlice.reducer;
