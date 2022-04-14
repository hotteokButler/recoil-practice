import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, IToDoState, toDoSelector, toDoState } from '../common/toDoState';
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
  const categoryList = useRecoilValue(toDoSelector);
  const allList = useRecoilState(toDoState);
  const setCategory = useSetRecoilState(categoryState);
  const [subtitle, setSubtitle] = useState('');

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSubtitle(name);
    if (name === 'toDos') {
      setCategory('TO_DO');
    } else if (name === 'doing') {
      setCategory('DOING');
    } else if (name === 'done') {
      setCategory('DONE');
    }
  };

  const categoryLength = (value: string) => {
    return allList[0].filter((todo) => todo.category === value).length;
  };

  return (
    <>
      <MenuToggleButton>
        <Button onClick={onClick} isActive={categoryLength('TO_DO') > 0} name="toDos">
          ToDos({categoryLength('TO_DO')})
        </Button>
        <Button onClick={onClick} isActive={categoryLength('DOING') > 0} name="doing">
          Doing({categoryLength('DOING')})
        </Button>
        <Button onClick={onClick} isActive={categoryLength('DONE') > 0} name="done">
          Done ({categoryLength('DONE')})
        </Button>
      </MenuToggleButton>
      <Subtitle>&lt;{subtitle ? subtitle : 'ToDos'}&gt;</Subtitle>
      <ul>
        {categoryList?.map((data) => (
          <ToDo key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
