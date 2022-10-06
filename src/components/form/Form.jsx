import React, { useState } from "react";
import "./style.css"

let number = 3;
function Form({ todos, setTodos }) {
  const init = {
    id: 0,
    title: "",
    content: "",
    idDone: false,
  };
  console.log(todos);

  const [todo, setTodo] = useState(init);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(init);
    number++;
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          ></input>
          <label>content</label>
          <input
            type="text"
            name="content"
            value={todo.content}
            onChange={onChangeHandler}
          ></input>
          <button>추가하기</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
