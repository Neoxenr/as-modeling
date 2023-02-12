import { Status } from '../status';

export interface Period {
  id: string;
  date: Date[];
  status: Status;
  label: string;
}
