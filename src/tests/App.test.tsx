import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
