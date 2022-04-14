import React, { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, IToDoState, toDoState } from '../common/toDoState';

const ToDoElem = styled.li`
  padding: 0.5em;
  color: ${(props) => props.theme.textColor};
`;
const ToDoText = styled.p`
  margin: 0 0 8px;
  font-size: 1.2em;
`;
const Button = styled.button`
  display: inline-block;
  padding: 0.3em;
  margin: 0 4px 0 0;
  cursor: pointer;
  border-radius: 4px;
`;
const ToDo = memo(({ text, id, category }: IToDoState) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos: any) => {
      return oldTodos.map((todo: any) =>
        todo.id === id ? { ...todo, category: Categories } : { ...todo }
      );
      // index와 slice , as any 이용한 방법
      // const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      // const newToDo = { text, id, category: name as any};
      // return [
      //   ...oldTodos.slice(0, targetIndex),
      //   newToDo,
      //   ...oldTodos.slice(targetIndex+1)
      // ]
    });
  };
  return (
    <ToDoElem>
      <ToDoText>{text}</ToDoText>
      {category !== Categories.DOING && (
        <Button name={Categories.DOING} onClick={onClick}>
          Doing
        </Button>
      )}
      {category !== Categories.TO_DO && (
        <Button name={Categories.TO_DO} onClick={onClick}>
          To do
        </Button>
      )}
      {category !== Categories.DONE && (
        <Button name={Categories.DONE} onClick={onClick}>
          Done
        </Button>
      )}
    </ToDoElem>
  );
});
export default ToDo;
