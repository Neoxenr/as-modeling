import { Status } from '../status';

export interface Period {
  id: string;
  date: string;
  status: Status;
  areaIndex: number;
  label: string;
}
