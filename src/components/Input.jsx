import React, { useState } from "react";
import styled from "styled-components";

const TodoInput = styled.input`
  width: 99%;
  height: 50px;
  text-indent: 20px;
  background: var(--background-color);
  color: var(--text-color);
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 15px;
`;

const AddButton = styled.button`
  position: absolute;
  height: 30px;
  width: 50px;
  top: 55%;
  right: 15px;
  transform: translateY(-50%);
  color: var(--dark-accent-color-lighter);
  border: 2px solid var(--dark-accent-color-lighter);
  background: transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    background: var(--dark-accent-color-lighter);
    color: var(--text-color);
  }
  &:focus {
    outline: 0;
  }
`;

export default function Input({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <InputWrapper>
      <TodoInput
        placeholder="Create a new todo..."
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {newTodo !== "" && (
        <AddButton
          onClick={(e) => {
            addTodo({
              item: newTodo,
              id: Math.floor(Math.random() * Math.floor(10000000)),
              completed: false,
            });
            setNewTodo("");
          }}
        >
          Add
        </AddButton>
      )}
    </InputWrapper>
  );
}
