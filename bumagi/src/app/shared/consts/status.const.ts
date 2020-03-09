import { SelectorModel } from "../models/selector.model";

export const Status: string[] = [
  'Подписка активна',
  'Приостановлена',
  'Заблокирован'
];

export const StatusSelector: SelectorModel[] = [
  {id: 0, label: Status[0]},
  {id: 1, label: Status[1]},
  {id: 2, label: Status[2]}
];
