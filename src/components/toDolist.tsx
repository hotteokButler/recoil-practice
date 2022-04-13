import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  Email: string;
  Frist_Name: string;
  Last_Name: string;
  Username: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: { Email: '@naver.com' },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError('Password', { message: 'Password are not the same' }, { shouldFocus: true });
    }
    //MakeExtraError example : setError('extraError', { message: 'Server offline' });
  };
  console.log(errors);
  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('Email', {
            required: 'Please write',
            pattern: { value: /[A-Za-z0-9._%+-]+@naver.com$/, message: 'Please Check your email' },
          })}
          placeholder="Eamil"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register('Frist_Name', {
            required: 'Please write',
            validate: {
              noHotteok: (value) => (value.includes('hotteok') ? "You can't use 'hotteok'" : true),
              noJisoo: (value) => (value.includes('jisoo') ? "You can't use 'jisoo'" : true),
            },
          })}
          placeholder="Frist Name"
        />
        <span>{errors?.Frist_Name?.message}</span>
        <input {...register('Last_Name', { required: 'Please write' })} placeholder="Last Name" />
        <span>{errors?.Last_Name?.message}</span>
        <input
          {...register('Username', {
            required: 'Please write',
            minLength: 5,
          })}
          placeholder="Username"
        />
        <span>{errors?.Username?.message}</span>
        <input {...register('Password', { required: 'Please write' })} placeholder="Password" />
        <span>{errors?.Password?.message}</span>
        <input {...register('Password1', { required: 'Please write' })} placeholder="Password1" />
        <span>{errors?.Password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default TodoList;
