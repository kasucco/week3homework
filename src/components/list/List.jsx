import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  return (
    <div>
      <div>
        <h2>Working</h2>
        <div>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2>Done</h2>
        <div>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
