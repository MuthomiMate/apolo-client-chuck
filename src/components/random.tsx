import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { GET_JOKE } from "../graphql/queries";
import Loader from "./loader";

const Container = styled.div`
  padding-bottom: 40px;
  margin-top: 3rem;
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    text-align: center;
    margin: 20px auto;
    max-width: 400px;
    padding: 0 20px;
  }
  button {
    min-width: 200px;
    margin: 0 auto;
    display: block;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    height: 40px;
    border: none;
    text-transform: uppercase;
    background: #171d21;
    box-shadow: 0 10px 10px -10px #000000;
    border-radius: 2px;
    color: #ffffff;
    transition: transform 0.2s;
  }
  button:hover {
    color: var(--bg);
    background: var(--primary);
    border: 2px solid var(--primary);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Random = ({ category }: string) => {
  const {
    loading,
    error,
    data: { random } = {},
    refetch,
    networkStatus
  } = useQuery(GET_JOKE, {
    variables: { category },
    notifyOnNetworkStatusChange: true
  });

  if (networkStatus === 4)
    return (
      <div>
        <Loader />
      </div>
    );
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return `${error}`;

  return (
    <Container>
      <p>{random.value}</p>
      <button type="button" onClick={() => refetch()}>
        Get New Joke
      </button>
    </Container>
  );
};

export default Random;
