import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    // const { baseElement } = documentBody;
    // expect(baseElement).toMatchSnapshot();
  });
});
