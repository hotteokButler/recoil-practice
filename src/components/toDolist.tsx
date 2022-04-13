import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {};
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
        <input {...register('Frist_Name', { required: 'Please write' })} placeholder="Frist Name" />
        <span>{errors?.Frist_Name?.message}</span>
        <input {...register('Last_Name', { required: 'Please write' })} placeholder="Last Name" />
        <span>{errors?.Last_Name?.message}</span>
        <input
          {...register('Username', {
            required: true,
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
      </form>
    </div>
  );
};

export default TodoList;
