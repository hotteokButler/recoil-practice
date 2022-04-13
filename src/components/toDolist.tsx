import { useRecoilValue } from 'recoil';
import { toDoState } from '../common/toDoState';
import ToDo from './toDo';

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <ul>
      {toDos.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </ul>
  );
};

export default TodoList;
