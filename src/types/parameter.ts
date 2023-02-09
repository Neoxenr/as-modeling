import { Point } from './point';

export interface Parameter {
  description: string;
  unit: string;
  tag: string;
  alias: string;
  points: Point[];
}
