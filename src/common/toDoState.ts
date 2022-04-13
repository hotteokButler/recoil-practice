import { atom, selector } from 'recoil';

export interface IToDoState {
  text: string;
  id: number;
  category: 'DONE' | 'DOING' | 'TO_DO';
}

export const toDoState = atom<IToDoState[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((todo) => todo.category === 'TO_DO'),
      toDos.filter((todo) => todo.category === 'DOING'),
      toDos.filter((todo) => todo.category === 'DONE'),
    ];
  },
});
