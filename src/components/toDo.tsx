import React, { memo } from 'react';
import styled from 'styled-components';
import { IToDoState } from '../common/toDoState';

const ToDoElem = styled.li`
  padding: 0.5em;
  color: ${(props) => props.theme.textColor};
`;

const ToDo = memo(({ text, category }: IToDoState) => {
  return <ToDoElem>{text}</ToDoElem>;
});
export default ToDo;
