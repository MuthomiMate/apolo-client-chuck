import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
  position: fixed;
  left: 40%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: React.FC<{}> = () => {
  return <Container />;
};
export default Loader;
