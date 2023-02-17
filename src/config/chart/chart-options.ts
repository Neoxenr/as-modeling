// Types
import { Options } from '../../types/chart/options';

// Line colors
import { LINE_COLORS } from './line-colors';

// Area colors
import { AREA_COLORS } from './area-colors';

export const CHART_OPTIONS: Options = {
  color: LINE_COLORS,
  textStyle: {
    fontFamily: 'Inter'
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontWeight: 'normal'
    },
    axisPointer: {
      type: 'cross',
      label: {
        formatter: (params: any) => {
          const { value } = params;

          if (typeof value === 'number') {
            return value.toFixed(2);
          }

          return value;
        }
      }
    },
    valueFormatter: (value: number) => value.toFixed(2)
  },
  grid: {
    top: 30,
    bottom: 60,
    right: '0',
    left: '30'
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
    },
    axisLabel: {
      align: 'center',
      fontSize: 11
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
