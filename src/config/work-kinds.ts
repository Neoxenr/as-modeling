// Types
import { WorkKind } from '../types/work-kind';

export const WORK_KINDS: WorkKind[] = [
  { id: 0, label: 'Нормальная работа', status: 'success' },
  { id: 1, label: 'Аномальная работа', status: 'warning' },
  { id: 2, label: 'Отказы', status: 'error' },
  { id: 3, label: 'Офлайн', status: 'normal' }
];
