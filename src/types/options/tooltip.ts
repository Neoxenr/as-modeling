export interface ToolTip {
  trigger: string;
  textStyle: {
    fontWeight: string;
  };
  axisPointer: {
    type: string;
    label: {
      formatter: ((params: any) => string | number) | string;
    };
  };
  order?: string;
  valueFormatter?: (value: number) => string;
}
