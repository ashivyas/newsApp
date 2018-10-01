import React from "react";
import renderer from "react-test-renderer";
import MainComponent from "../src/articles/MainComponent";

it('renders correctly', () => {
  const tree = renderer.create(
    <MainComponent />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
