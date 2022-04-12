import React, { useRef, useState } from 'react';

const TodoList = () => {
  const [value, setValue] = useState<string>();
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setValue(value);
  // };
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(inputRef.current.value);
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
