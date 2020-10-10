import React, { useState } from "react";
import styled from "styled-components";
import { useState } from "react";

const Joke: React.FC<{}> = () => {
  const [selelectedOption, setSelectedOption] = useState<Boolean>(false);

  const onCategorySelected = ({ target }) => {
    setSelectedOption(target.value);
  };
};
export default Joke;
