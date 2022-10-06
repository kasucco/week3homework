import React from "react";
import "./style.css";

const Todo = ({ todo, todos, setTodos }) => {
  const onDeleteHandler = (itemId) => {
    const newtodos = todos.filter((todo) => {
      return todo.id !== itemId;
    });
    setTodos(newtodos);
  };

  const onEditHandler = (itemId) => {
    const newtodos = todos.map((todo) => {
      if (todo.id === itemId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newtodos);
  };
  return (
    <div className="cardbox">
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="buttonset">
        <button
          className="todo-delete-button"
          onClick={() => onDeleteHandler(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
