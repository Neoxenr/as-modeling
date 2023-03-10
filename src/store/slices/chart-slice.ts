/* eslint-disable no-param-reassign */

// Redux
import { createSlice } from '@reduxjs/toolkit';

// Chart config
import { CHART_OPTIONS } from '../../config/chart/chart-options';

// Chart config colors
import { LINE_COLORS } from '../../config/chart/line-colors';

// Chart config names
import { CHART_NAMES } from '../../config/chart/chart-names';

// Utilites
import { getNestedPropertyValues, copyObject } from '../../utilities';

// Types
import { YAxis } from '../../types/options/y-axis';
import { Point } from '../../types/chart/point';
import { Parameter } from '../../types/chart/parameter';
import { ChartState } from '../../types/chart/state';

const initialState: ChartState = copyObject(
  Object.values(CHART_NAMES),
  CHART_OPTIONS
);

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addData: (state, action) => {
      const { name, data } = action.payload;

      const { grid, series, yAxis } = state[name];

      grid.left = `${data.length * 100 - 20}px`;

      yAxis.push(
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
              color: LINE_COLORS[index]
            }
          },
          axisLabel: {
            formatter: (value: string) => `${value} ${param.unit}`
          }
        }))
      );

      series.unshift(
        ...data.map((param: Parameter, index: number) => ({
          name: param.description,
          type: 'line',
          yAxisIndex: index + 1,
          data: param.points.map((point: Point) => [point.d, point.v])
        }))
      );
    },
    addArea: (state, action) => {
      const { names, data } = action.payload;

      const { id, areaIndex, period } = data;

      names.forEach((name: string) => {
        const { series } = state[name];

        const { markArea, markLine } = series[series.length - areaIndex - 1];

        markLine.data.push({ id, xAxis: period[0] }, { id, xAxis: period[1] });

        markArea.data.push([
          { id, xAxis: period[0] },
          { id, xAxis: period[1] }
        ]);
      });
    },
    removeArea: (state, action) => {
      const { names, data } = action.payload;

      const { id, areaIndex } = data;

      names.forEach((name: string) => {
        const { series } = state[name];

        const { markArea, markLine } = series[series.length - areaIndex - 1];

        markLine.data = markLine.data.filter((item) => item.id !== id);

        markArea.data = markArea.data.filter((item) => item[0].id !== id);
      });
    },
    removeAreasByGroupIndex: (state, action) => {
      const { names, areaIndex } = action.payload;

      names.forEach((name: string) => {
        const { series } = state[name];

        const { markArea, markLine } = series[series.length - areaIndex - 1];

        markLine.data = [];

        markArea.data = [];
      });
    },
    hideAreasByGroupIndex: (state, action) => {
      const { names, data } = action.payload;

      const { areaIndex, isVisible } = data;

      const opacity = isVisible ? 0 : 0.99;

      names.forEach((name: string) => {
        const { series } = state[name];

        const { markArea, markLine } = series[series.length - areaIndex - 1];

        markLine.lineStyle.opacity = opacity;

        markArea.itemStyle.opacity = opacity;
      });
    },
    hideYAxis: (state, action) => {
      const { name, data } = action.payload;

      const { axisName, isVisible } = data;

      const { selected } = state[name].legend;

      selected[axisName] = isVisible;
    },
    switchYAxis: (state, action) => {
      const { name, data } = action.payload;

      const { yAxisName, isVisible } = data;

      const { grid, legend, yAxis } = state[name];

      const gridShift: number = isVisible ? -100 : 100;

      const selectedYAxisIndex: number = yAxis.findIndex(
        (item: YAxis) => item.name === yAxisName
      );

      grid.left = `${parseInt(grid.left, 10) + gridShift}px`;

      yAxis[selectedYAxisIndex].show = !isVisible;

      for (let i = selectedYAxisIndex + 1; i < yAxis.length; i += 1) {
        yAxis[i].offset += gridShift;
      }

      legend.selected[yAxisName] = !isVisible;
    },
    setOption: (state, action) => {
      const { name } = action.payload;

      const { fields, key, value } = action.payload.option;

      const optionValue = getNestedPropertyValues(state[name], ...fields);

      optionValue[key] = value;
    }
  }
});

export const {
  addData,
  addArea,
  removeArea,
  removeAreasByGroupIndex,
  hideAreasByGroupIndex,
  hideYAxis,
  switchYAxis,
  setOption
} = chartSlice.actions;

export default chartSlice.reducer;
