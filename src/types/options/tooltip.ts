export interface ToolTip {
  trigger: string;
  axisPointer: {
    type: string;
    label: {
      formatter: ((params: any) => string | number) | string;
    };
  };
  order?: string;
  valueFormatter?: (value: number) => string;
}
