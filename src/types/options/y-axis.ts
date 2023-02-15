export interface YAxis {
  type?: string;
  name?: string;
  show?: boolean;
  position?: string;
  alignTicks?: boolean;
  nameGap?: number;
  offset: number;
  axisLine?: {
    show: boolean;
    lineStyle: {
      color: string;
    };
  };
  axisLabel?: {
    formatter: (value: number | string) => string | string;
  };
}
