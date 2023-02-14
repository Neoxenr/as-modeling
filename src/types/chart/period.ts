import { Status } from '../status';

export interface Period {
  id: string;
  date: Date[];
  status: Status;
  areaIndex: number;
  label: string;
}
