import React from "react";
import styled from "styled-components";
import { TodoItem } from "../styles/ListStyles";

const TodoList = styled.div`
  width: 100%;
  border: 2px solid red;
  transition: 0.5s all;
  .todo-name {
    position: absolute;
    padding-left: 5px;
    visibility: visible;
  }
  .input-wrapper {
    border: 2px solid red;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .btn-wrapper {
    position: absolute;
    right: 0;
  }
  .complete-btn {
    /* background: red; */
  }
  .completed {
    background: green;
  }
  .progress {
    background: yellow;
  }
`;
const SingleTodoItem = ({ todo, deleteCompletedTodo }) => {
  return (
    <>
      <TodoItem>
        <div className="todo-name">{todo.item}</div>
        <button
          style={{ position: "absolute", right: 0 }}
          onClick={() => deleteCompletedTodo(todo.id)}
        >
          X
        </button>
      </TodoItem>
    </>
  );
};
export default function CompletedList({ completedTodos, deleteCompletedTodo }) {
  console.log(completedTodos);
  return (
    <TodoList>
      {completedTodos.map((todo) => (
        <SingleTodoItem
          todo={todo}
          key={todo.id}
          deleteCompletedTodo={deleteCompletedTodo}
        />
      ))}
    </TodoList>
  );
}
