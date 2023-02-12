import { WorkType } from './work-type';

export interface Period {
  id: string;
  date: Date[];
  workType: WorkType;
}
