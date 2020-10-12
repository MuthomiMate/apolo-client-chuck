import React from "react";
import { mount, configure } from "enzyme";
import { MockedProvider } from '@apollo/client/testing';
import { GET_JOKE } from "../graphql/queries";
import Adapter from 'enzyme-adapter-react-16';
import Random from "../components/random";

const mocks = [
    {
      request: {
        query: GET_JOKE,
        variables: {
          category: 'animal',
        },
      },
      result: {
        data: {
          dog: { value: "this is an animal joke"},
        },
      },
    },
  ];

configure({adapter: new Adapter()});
describe("<Random />", () => {
  test("should render without crashing", () => {
    const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Random category="animal" />
        </MockedProvider>,
      );
      wrapper.debug()
  });
});