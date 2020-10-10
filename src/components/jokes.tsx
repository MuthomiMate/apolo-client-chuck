import React, { useState } from "react";
import styled from "styled-components";
import Categories from "./categories";
import Random from "./random";

const Container = styled.div`
  border-radius: 5px;
  margin-top: 40px;
  div {
    position: relative;
    min-height: 100px;
  }
  @media screen and (max-width: 576px) {
    .generator {
      flex-direction: column;
      text-align: center;
    }
    .generator > div {
      flex: 0 0 100%;
    }
  }
`;

const Jokes: React.FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<String>("");

  const onCategorySelected = ({ target }: any) => {
    setSelectedCategory(target.value);
  };

  return (
    <Container>
      <div>
        <Categories onCategorySelected={onCategorySelected} />
      </div>
      <div>
        <Random category={selectedCategory} />
      </div>
    </Container>
  );
};
export default Jokes;
