import React from "react";
import TodoListAnswer from "../../pages/TodoListAnswer";

function TodoAnswer({ todo, onDeleteHandler, onEditHandler }) {
  return (
    <div>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div>
        <button onClick={() => onDeleteHandler(todo.id)}>삭제하기</button>
        <button onClick={() => onEditHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default TodoAnswer;
