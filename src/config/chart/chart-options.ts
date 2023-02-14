// Types
import { Options } from '../../types/chart/options';

// Line colors
import { LINE_COLORS } from './line-colors';
import { AREA_COLORS } from './area-colors';

export const CHART_OPTIONS: Options = {
  color: LINE_COLORS,
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
  yAxis: [{ show: false, offset: 0 }],
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    }
  },
  series: [
    {
      type: 'line',
      markArea: {
        itemStyle: {
          color: AREA_COLORS.OFFLINE
        },
        data: []
      },
      markLine: {
        symbol: ['none', 'none'],
        lineStyle: {
          color: '#000',
          type: 'solid'
        },
        label: { show: false },
        data: []
      }
    },
    {
      type: 'line',
      markArea: {
        itemStyle: {
          color: AREA_COLORS.ERROR
        },
        data: []
      },
      markLine: {
        symbol: ['none', 'none'],
        lineStyle: {
          color: '#000',
          type: 'solid'
        },
        label: { show: false },
        data: []
      }
    },
    {
      type: 'line',
      markArea: {
        itemStyle: {
          color: AREA_COLORS.WARNING
        },
        data: []
      },
      markLine: {
        symbol: ['none', 'none'],
        lineStyle: {
          color: '#000',
          type: 'solid'
        },
        label: { show: false },
        data: []
      }
    },
    {
      type: 'line',
      markArea: {
        itemStyle: {
          color: AREA_COLORS.NORMAL
        },
        data: []
      },
      markLine: {
        symbol: ['none', 'none'],
        lineStyle: {
          color: '#000',
          type: 'solid'
        },
        label: { show: false },
        data: []
      }
    }
  ]
};
