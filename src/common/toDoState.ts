import { atom } from 'recoil';

export interface IToDoState {
  text: string;
  id: number;
  category: 'DONE' | 'DIONG' | 'TO_DO';
}

export const toDoState = atom<IToDoState[]>({
  key: 'toDo',
  default: [],
});
