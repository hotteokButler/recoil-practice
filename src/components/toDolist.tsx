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
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register('Email')} placeholder="Eamil" />
        <input {...register('Frist_Name')} placeholder="Frist Name" />
        <input {...register('Last_Name')} placeholder="Last Name" />
        <input {...register('Username')} placeholder="Username" />
        <input {...register('Password')} placeholder="Password" />
        <input {...register('Password1')} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
