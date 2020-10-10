import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Jokes from "../components/jokes";

configure({adapter: new Adapter()});
describe("<Jokes />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<Jokes />);
    expect(wrapper).toMatchSnapshot();
  });
});