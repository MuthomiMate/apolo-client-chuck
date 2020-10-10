import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Loader from "../components/loader";

configure({adapter: new Adapter()});
describe("<App />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});