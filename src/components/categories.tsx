import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORIES } from "../graphql/queries";
import styled from "styled-components";
import Loader from "./loader";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
    margin: 0;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align-last: center;
    text-align: -webkit-center;
    min-width: 200px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 3rem;
    height: 42px;
    text-transform: uppercase;
    @media screen and (max-width: 576px) {
      padding: 8px;
      max-width: 200px;
      margin: 10px auto;
      margin-top: 1rem;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .name {
    text-transform: uppercase;
  }
`;

type Category = {
  name: string;
};

const Categories = ({ onCategorySelected }: any) => {
  const { loading, error, data: { categories } = {} } = useQuery(
    GET_CATEGORIES
  );
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <Container>
      <div />
      <div>
        <select name="category" onChange={onCategorySelected}>
          <option value=""> SELECT CATEGORY</option>
          {categories.map((category: Category, id: string) => (
            <option key={id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
};

export default Categories;
