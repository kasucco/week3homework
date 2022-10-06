import React, { useState } from "react";

let number = 3;
function FormAnswer({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  console.log(todos);

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
}

export default FormAnswer;
