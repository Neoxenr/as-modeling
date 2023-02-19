// Types
import { Params } from './params';

export interface ToolTip {
  trigger: string;
  textStyle: {
    fontWeight: string;
  };
  axisPointer: {
    type: string;
    label: {
      formatter: ((params: Params) => string | number) | string;
    };
  };
  order?: string;
  valueFormatter?: (value: number) => string;
}
