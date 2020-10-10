import React from "react";
import styled from "styled-components";
import Joke from "./joke1";
import chuck from "../assets/chuck.png";

const Cover = styled.div`
  background: #fff;
  max-width: 800px;
  margin: auto;
  height: 100%;
  min-height: 100vh;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;
const Button = styled.div`
  background: #171d21;
  color: #ffffff;
  padding: 1rem;
  margin-top: 2rem;
  margin: auto;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 10px 10px -10px #000000;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: auto;
  position: relative;
`;

const Main: React.FC<{}> = () => {
  return (
    <Cover>
      <div style={{ marginTop: "1rem", height: "1rem" }}> </div>
      <Container>
        <Button>Chuck Joke Generator</Button>
        <div
          style={{
            width: "50px",
            height: "150px",
            position: "absolute",
            marginTop: "7rem"
          }}
        >
          <img src={chuck} style={{ height: "150px" }} alt="" />
        </div>
      </Container>
      <div>
        <Joke />
      </div>
    </Cover>
  );
};
export default Main;
