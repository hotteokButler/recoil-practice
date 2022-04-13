import React, { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IToDoState, toDoState } from '../common/toDoState';

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
const ToDo = memo(({ text, category, id }: IToDoState) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos) => {
      const targetPosition = oldTodos.findIndex((toDo) => toDo.id === id);
      const newTodos = { ...oldTodos[targetPosition], category: name };

      return [...oldTodos].splice(3, 1);
    });
  };
  return (
    <ToDoElem>
      <ToDoText>{text}</ToDoText>
      {category !== 'DOING' && (
        <Button name="DOING" onClick={onClick}>
          Doing
        </Button>
      )}
      {category !== 'TO_DO' && (
        <Button name="TO_DO" onClick={onClick}>
          To do
        </Button>
      )}
      {category !== 'DONE' && (
        <Button name="DONE" onClick={onClick}>
          Done
        </Button>
      )}
    </ToDoElem>
  );
});
export default ToDo;
