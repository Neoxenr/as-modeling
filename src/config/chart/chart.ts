// Types
import { Options } from '../../types/chart/options';

// Colors
import { COLORS } from './colors';

export const CHART_CONFIG: Options = {
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
