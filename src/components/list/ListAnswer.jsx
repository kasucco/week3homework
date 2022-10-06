import React from "react";
import TodoAnswer from "../todo/TodoAnswer";

function ListAnswer({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h2> Working...!</h2>
      <div>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoAnswer
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done...!</h2>
      <div>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoAnswer
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ListAnswer;
