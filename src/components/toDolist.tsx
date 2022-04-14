import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  Categories,
  categoryState,
  IToDoState,
  toDoSelector,
  toDoState,
} from '../common/toDoState';
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
  const setCategory = useSetRecoilState<Categories>(categoryState);
  const [subtitle, setSubtitle] = useState('');

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
    setSubtitle(name);
    if (name === 'toDos') {
      setCategory(Categories.TO_DO);
    } else if (name === 'doing') {
      setCategory(Categories.DOING);
    } else if (name === 'done') {
      setCategory(Categories.DONE);
    }
  };

  const categoryLength = (value: Categories) => {
    return allList[0].filter((todo) => todo.category === value).length;
  };

  return (
    <>
      <MenuToggleButton>
        <Button onClick={onClick} isActive={categoryLength(Categories.TO_DO) > 0} name="toDos">
          ToDos({categoryLength(Categories.TO_DO)})
        </Button>
        <Button onClick={onClick} isActive={categoryLength(Categories.DOING) > 0} name="doing">
          Doing({categoryLength(Categories.DOING)})
        </Button>
        <Button onClick={onClick} isActive={categoryLength(Categories.DONE) > 0} name="done">
          Done ({categoryLength(Categories.DONE)})
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
