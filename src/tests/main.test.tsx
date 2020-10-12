import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Main from "../components/main";

configure({adapter: new Adapter()});
describe("<Main />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<Main />);
    wrapper.debug();
    expect(wrapper).toMatchSnapshot();
  });
});
