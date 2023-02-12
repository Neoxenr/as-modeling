// Types
import { WorkKind } from '../types/work';

export const WORK_KINDS: WorkKind[] = [
  { id: 1, label: 'Нормальная работа', status: 'success' },
  { id: 2, label: 'Аномальная работа', status: 'warning' },
  { id: 3, label: 'Отказы', status: 'error' },
  { id: 4, label: 'Офлайн', status: 'normal' }
];
