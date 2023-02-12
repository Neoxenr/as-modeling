/* eslint-disable no-param-reassign */

// Redux
import { createSlice } from '@reduxjs/toolkit';

// Chart config
import { CHART_CONFIG } from '../../config/chart/chart';

// Chart config colors
import { COLORS } from '../../config/chart/colors';

// Chart config names
import { CHART_NAMES } from '../../config/chart/names';

// Utilites
import { getPropValues, copyObjectToKeys } from '../../utilities';

// Types
import { YAxis } from '../../types/chart/options';
import { ChartState } from '../../types/chart/state';
import { Parameter } from '../../types/chart/parameter';
import { Point } from '../../types/chart/point';

const initialState: ChartState = copyObjectToKeys(
  Object.keys(CHART_NAMES),
  CHART_CONFIG
);

const chartSlice = createSlice({
  name: 'chartsConfig',
  initialState,
  reducers: {
    addDataToChart: (state, action) => {
      const { name, data } = action.payload;

      const { grid, xAxis } = state[name];

      grid.left = `${data.length * 100}px`;

      xAxis.data = data[0].points.map((point: Point) => point.d);

      state[name].yAxis = [
        ...state[name].yAxis,
        ...data.map((param: Parameter, index: number) => ({
          type: 'value',
          name: param.description,
          nameGap: 1000,
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

      state[name].series = data.map((param: Parameter, index: number) => ({
        name: param.description,
        type: 'line',
        yAxisIndex: index + 1,
        data: param.points.map((point: Point) => point.v)
      }));
    },
    switchChartYAxis: (state, action) => {
      const { name, visible } = action.payload;

      const { grid, yAxis, legend } = state[name];

      const gridShift: number = visible.isVisible ? -100 : 100;

      const selectedYAxisIndex: number = yAxis.findIndex(
        (item: YAxis) => item.name === visible.name
      );

      yAxis[selectedYAxisIndex].show = !visible.isVisible;

      grid.left = `${parseInt(grid.left, 10) + gridShift}px`;

      for (let i = selectedYAxisIndex + 1; i < yAxis.length; i += 1) {
        yAxis[i].offset += gridShift;
      }

      legend.selected[visible.name] = !visible.isVisible;
    },
    setChartOption: (state, action) => {
      const { name } = action.payload;

      const { fields, key, value } = action.payload.option;

      const optionValue = getPropValues(state[name], ...fields);

      optionValue[key] = value;
    }
  }
});

export const { addDataToChart, setChartOption, switchChartYAxis } =
  chartSlice.actions;

export default chartSlice.reducer;
