interface ToolTip {
  trigger: string;
  axisPointer: {
    type: string;
  };
}

interface Grid {
  right: string;
  left: string;
  show: boolean;
}

interface XAxis {
  type: string;
  axisTick: {
    alignWithLabel: boolean;
  };
  data: string[];
}

interface YValues {
  name: string;
  type: string;
  yAxisIndex: number;
  data: number[];
}

export interface YAxis {
  type?: string;
  name?: string;
  show: boolean;
  position?: string;
  alignTicks?: boolean;
  offset: number;
  axisLine?: {
    show: boolean;
    lineStyle: {
      color: string;
    };
  };
  axisLabel?: {
    formatter: string;
  };
}

export interface Options {
  [option: string]: any;
  color: string[];
  tooltip: ToolTip;
  grid: Grid;
  legend: {
    show: boolean;
    selected: {
      [key: string]: boolean;
    };
  };
  xAxis: XAxis;
  yAxis: YAxis[];
  series: YValues[];
}
