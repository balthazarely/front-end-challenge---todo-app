import React, { useState } from "react";
import styled from "styled-components";

const StatusFilterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: var(--background-color);
  color: var(--text-color);
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .select {
    color: var(--accent-color);
  }
`;
const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: 0.1s;
  &:hover {
    color: var(--accent-color);
  }
`;

const ClearButton = styled.button`
  background: transparent;
  outline: none;
  border: 2px solid var(--dark-accent-color-lighter);
  color: var(--dark-accent-color-lighter);
  cursor: pointer;
  font-size: 16px;
  padding: 6px 10px;
  margin: 5px;
  transition: 0.1s;
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    background: var(--dark-accent-color-lighter);
    color: var(----text-color);
  }
`;

export default function StatusFilter({
  selected,
  handleSelectBtn,
  clearCompletedTask,
}) {
  return (
    <StatusFilterWrapper>
      <div className="mid-btn">
        <Button
          onClick={() => handleSelectBtn("all")}
          className={selected === "all" ? "select" : ""}
        >
          All
        </Button>
        <Button
          onClick={() => handleSelectBtn("progress")}
          className={selected === "progress" ? "select" : ""}
        >
          In Progress
        </Button>
        <Button
          onClick={() => handleSelectBtn("completed")}
          className={selected === "completed" ? "select" : ""}
        >
          Completed
        </Button>
      </div>
      <ClearButton onClick={clearCompletedTask}>Clear Completed</ClearButton>
    </StatusFilterWrapper>
  );
}
