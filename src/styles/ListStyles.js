import styled from "styled-components";

export const TodoItem = styled.div`
  width: 100%;
  height: 50px;
  background: var(--background-color);
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-top: 1px solid var(--dark-accent-color);
  color: var(--text-color);
  cursor: pointer;
  position: relative;
  transition: 0.5s all;
`;
