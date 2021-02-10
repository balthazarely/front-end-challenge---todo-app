import React from "react";
import styled from "styled-components";

const PaggContentWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export default function PageWrapper({ children }) {
  return <PaggContentWrapper>{children}</PaggContentWrapper>;
}
