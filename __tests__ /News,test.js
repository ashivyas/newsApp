import React from "react";
import renderer from "react-test-renderer";
import News from "../src/component/News";

it('renders correctly', () => {
  const tree = renderer.create(
    <News />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
