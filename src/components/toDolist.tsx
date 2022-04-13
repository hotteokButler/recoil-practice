import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

// const TodoList = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("")
//   // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   //   const {
//   //     currentTarget: { value },
//   //   } = event;
//   //   setValue(value);
//   // };
//   const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if(inputRef.current.value.length < 10) {
//       return setError('To do should be logner than you inputed')
//     } else {
//       setError("")
//     }
//     setValue(inputRef.current.value);
//     console.log(inputRef.current.value);
//     inputRef.current.value = '';
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" ref={inputRef} placeholder="Write a to do" />
//         <button>Add</button>
//         {error !== "" ? <h1>{error}</h1>:null}
//       </form>
//     </div>
//   );
// };

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
            required: 'Email is required',
            pattern: { value: /[A-Za-z0-9._%+-]+@naver.com$/, message: 'Please Check your email' },
          })}
          placeholder="Eamil"
        />
        <span>{errors?.Email?.message}</span>
        <input {...register('Frist_Name', { required: 'required' })} placeholder="Frist Name" />
        <span>{errors?.Frist_Name?.message}</span>
        <input {...register('Last_Name', { required: 'required' })} placeholder="Last Name" />
        <span>{errors?.Last_Name?.message}</span>
        <input
          {...register('Username', {
            required: true,
            minLength: 5,
          })}
          placeholder="Username"
        />
        <span>{errors?.Username?.message}</span>
        <input {...register('Password', { required: 'required' })} placeholder="Password" />
        <span>{errors?.Password?.message}</span>
        <input {...register('Password1', { required: 'required' })} placeholder="Password1" />
        <span>{errors?.Password1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
