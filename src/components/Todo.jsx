import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import Header from "./Header";
import styled from "styled-components";
import StatusFilter from "./StatusFilter";

const TodoWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  h1 {
    color: var(--text-color);
  }
`;

const initialTodo = [
  { item: "get job", id: 1, completed: false },
  { item: "paint my moms house", id: 5, completed: true },
  { item: "get homework done", id: 2, completed: false },
  { item: "attend career fair", id: 3, completed: false },
];

export default function Todo() {
  const [todos, setTodos] = useState(initialTodo);
  const [selected, setSelected] = useState("all");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (edittedTodo, id) => {
    todos.find((x) => x.id === id).item = edittedTodo;
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    // newTodos.find((x) => x.id === id).completed = true;
    let todoItem = newTodos.find((x) => x.id === id);
    if (todoItem.completed === true) {
      todoItem.completed = false;
    } else if (todoItem.completed === false) {
      todoItem.completed = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (todoID) => {
    let filteredList = todos.filter((todo) => todo.id !== todoID);
    setTodos([...filteredList]);
  };

  // Filter Stuff
  const handleSelectBtn = (selectedBtn) => {
    setSelected(selectedBtn);
  };

  const clearCompletedTask = () => {
    let filteredList = todos.filter((todo) => !todo.completed);
    setTodos([...filteredList]);
  };

  const sortBy = (todos) => {
    if (selected === "all") {
      return todos;
    }
    if (selected === "progress") {
      return todos.filter((todo) => todo.completed === false);
    }
    if (selected === "completed") {
      return todos.filter((todo) => todo.completed === true);
    }
    console.log(todos);
  };
  const filteredTodos = sortBy(todos);

  return (
    <TodoWrapper>
      <Header />
      <Input addTodo={addTodo} />
      <List
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
      />
      <StatusFilter
        selected={selected}
        handleSelectBtn={handleSelectBtn}
        clearCompletedTask={clearCompletedTask}
      />
    </TodoWrapper>
  );
}
