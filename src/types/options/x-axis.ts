export interface XAxis {
  type: string;
  axisTick: {
    alignWithLabel: boolean;
  };
  data?: string[];
  inverse?: boolean;
  axisLabel?: {
    align?: string;
  };
}
