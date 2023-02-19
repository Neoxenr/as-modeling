import { MarkData } from './mark-data';

export interface YValues {
  name?: string;
  type: string;
  yAxisIndex?: number;
  data?: [string, number][];
  markLine: {
    symbol: string[];
    label: {
      show: boolean;
    };
    data: MarkData[];
    lineStyle: {
      color?: string;
      type?: string;
      opacity?: number;
    };
  };
  markArea: {
    itemStyle: {
      color?: string;
      opacity?: number;
    };
    data: [MarkData, MarkData][];
  };
}
