import React, { useState } from "react";
import FormAnswer from "../components/form/FormAnswer";
import HeaderAnswer from "../components/header/HeaderAnswer";
import LayoutAnswer from "../components/layout/LayoutAnswer";
import ListAnswer from "../components/list/ListAnswer";

const TodoListAnswer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
  ]);

  return (
    <LayoutAnswer>
      <HeaderAnswer />
      <FormAnswer setTodos={setTodos} todos={todos} />
      <ListAnswer todos={todos} setTodos={setTodos} />
    </LayoutAnswer>
  );
};
export default TodoListAnswer;
