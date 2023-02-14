import { Grid } from '../options/grid';
import { Legend } from '../options/legend';
import { ToolTip } from '../options/tooltip';
import { XAxis } from '../options/x-axis';
import { YValues } from '../options/y-values';
import { YAxis } from '../options/y-axis';

export interface Options {
  [option: string]: any;
  color: string[];
  tooltip: ToolTip;
  grid: Grid;
  legend: Legend;
  xAxis: XAxis;
  yAxis: YAxis[];
  series: YValues[];
}
