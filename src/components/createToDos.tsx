import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, toDoState } from '../common/toDoState';

const Form = styled.form`
  display: flex;
  input[type='text'] {
    padding: 0.5em 1.5em;
    font-size: 1.1em;
    flex: 1;
  }
  input[type='submit'] {
    padding: 0.5em 2em;
    margin: 0 auto;
    font-size: 1.5em;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.liTextColor};
    cursor: pointer;
  }
`;

interface IForm {
  toDo: string;
  extraError?: string;
}

const CreateTodos = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm, event: any) => {
    event.preventDefault();
    setToDos((prev) => [...prev, { text: data.toDo, id: Date.now(), category: Categories.TO_DO }]);
    setValue('toDo', '');
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        type="text"
        placeholder="Your to Dos"
        {...register('toDo', { required: 'Write your toDos' })}
      />
      <input type="submit" value="Add" />
    </Form>
  );
};

export default CreateTodos;
