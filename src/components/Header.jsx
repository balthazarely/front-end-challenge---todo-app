import React, { useState } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  .icon {
    position: absolute;
    right: 0;
    font-size: 24px;
    color: var(--text-color);
    cursor: pointer;
    &:hover {
      color: var(--accent-color);
    }
  }
`;
export default function Header() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <HeaderWrapper>
      <h1>TODO</h1>
      <IconWrapper>
        {theme === "light" ? (
          <FaRegSun className="icon" onClick={switchTheme} />
        ) : (
          <FaMoon className="icon" onClick={switchTheme} />
        )}
      </IconWrapper>
    </HeaderWrapper>
  );
}
