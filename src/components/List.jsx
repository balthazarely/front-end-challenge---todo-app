import React, { useState } from "react";
import styled from "styled-components";

import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaTrash,
  FaRegEdit,
} from "react-icons/fa";

const TodoList = styled.div`
  width: 100%;
  height: 480px;
  background: var(--background-color);
`;

const BtnWrapper = styled.div`
  visibility: hidden;
  .del-btn {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const TodoItem = styled.div`
  width: 100%;
  height: 60px;
  background: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark-accent-color);
  color: var(--text-color);
  cursor: pointer;
  position: relative;

  &:hover {
    background: var(--dark-accent-color);
    transform: translateY(-2px);
  }
  &:hover ${BtnWrapper} {
    visibility: visible;
  }
  .left-side {
    display: flex;
    margin-left: 10px;
    justify-content: flex-start;
    width: 70%;
    .todo-input {
      height: 30px;
      width: 250px;
      font-size: 18px;
      &:focus {
        outline: none;
      }
    }
    .done-btn {
      margin-left: 10px;
      background: var(--dark-accent-color-lighter);
      outline: none;
      color: white;
      cursor: pointer;
    }
  }
  .right-side {
    display: flex;
    margin-right: 10px;
    justify-content: flex-end;
    width: 30%;
  }
`;

const TodoNameWrapper = styled.div`
  font-size: 18px;
  padding-left: 10px;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  .completed {
    color: var(--accent-color);

    &:hover {
      color: var(--accent-color);
    }
  }
  .inprogress {
    color: var(--dark-accent-color-lighter);
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const SingleTodoItem = ({
  todo,
  editTodo,
  deleteTodo,
  completeTodo,
  index,
}) => {
  const [inputShowing, setInputShowing] = useState(false);
  const [newTodo, setNewTodo] = useState("fuck");

  const handleAllowEditting = () => {
    setInputShowing(!inputShowing);
  };

  return (
    <>
      <TodoItem key={todo.id}>
        <div className="left-side">
          {!inputShowing ? (
            <>
              <CheckWrapper onClick={() => completeTodo(todo.id)}>
                {todo.completed ? (
                  <FaCheckCircle className="completed" />
                ) : (
                  <FaRegCheckCircle className="inprogress" />
                )}
              </CheckWrapper>
              <TodoNameWrapper>{todo.item}</TodoNameWrapper>
            </>
          ) : (
            <div className="input-wrapper">
              <input
                className="todo-input"
                type="text"
                value={todo.item}
                onChange={(e) => {
                  editTodo(e.target.value, todo.id);
                  setNewTodo(e.target.value);
                }}
              />
              <button className="done-btn" onClick={handleAllowEditting}>
                Done
              </button>
            </div>
          )}
        </div>

        <div className="right-side">
          <BtnWrapper>
            <FaRegEdit className="del-btn" onClick={handleAllowEditting} />
            <FaTrash className="del-btn" onClick={() => deleteTodo(todo.id)} />
          </BtnWrapper>
        </div>
      </TodoItem>
    </>
  );
};

export default function Input({ todos, deleteTodo, editTodo, completeTodo }) {
  return (
    <TodoList>
      {todos.map((todo, i) => (
        <SingleTodoItem
          index={i}
          todo={todo}
          key={todo.id}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </TodoList>
  );
}
