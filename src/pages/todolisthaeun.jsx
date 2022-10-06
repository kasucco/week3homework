import React, { useState } from "react";

function Headeer() {
  return (
    <div>
      <span>My Todo List</span>
      <span>React</span>
    </div>
  );
}

function Form({ todos, setTodos }) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const title = e.target[0].value;
    const contents = e.target[1].value;
    setTodos([...todos, { title, contents, id: Date.now(), state: "working" }]);
  };
  console.log(todos);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>제목</label>
        <input type="text" />
        <label>내용</label>
        <input type="text" />
        <button>추가하기</button>
      </div>
    </form>
  );
}

function List() {
  return;
}

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Headeer />
      <Form todos={todos} setTodos={setTodos} />
      <List />
    </div>
  );
};

export default TodoList;
