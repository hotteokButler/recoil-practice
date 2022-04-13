import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IToDoState, toDoSelector, toDoState } from '../common/toDoState';
import ToDo from './toDo';

const Button = styled.button<{ isActive: boolean }>`
  display: block;
  margin: 0 2em;
  padding: 0.5em 1em;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.liBgColor};
  color: ${(props) => (props.isActive ? '#fcfcfc' : props.theme.liTextColor)};
  cursor: pointer;
`;

const Subtitle = styled.h2`
  padding: 1em 0.5em;
  font-size: 1.5em;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
`;

const MenuToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
`;

const TodoList = () => {
  const [toDos, doing, done] = useRecoilValue(toDoSelector);
  const [categoryList, setCategoryList] = useState<IToDoState[]>();
  const [subtitle, setSubtitle] = useState('');

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setSubtitle(name);
    if (name === 'toDos') {
      setCategoryList(toDos);
    } else if (name === 'doing') {
      setCategoryList(doing);
    } else if (name === 'done') {
      setCategoryList(done);
    }
  };

  return (
    <>
      <MenuToggleButton>
        <Button onClick={onClick} isActive={toDos.length > 0} name="toDos">
          ToDos ({toDos.length})
        </Button>
        <Button onClick={onClick} isActive={doing.length > 0} name="doing">
          Doing ({doing.length})
        </Button>
        <Button onClick={onClick} isActive={done.length > 0} name="done">
          Done ({done.length})
        </Button>
      </MenuToggleButton>
      <Subtitle>&lt;{subtitle ? subtitle : 'ToDos'}&gt;</Subtitle>
      <ul>
        {(categoryList ? categoryList : toDos).map((data) => (
          <ToDo key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
