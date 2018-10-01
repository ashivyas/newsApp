import React from "react";
import NoFeed from "../src/component/NoFeed";
import renderer from "react-test-renderer";

it('renders correctly', () => {
  const tree = renderer.create(
    <NoFeed />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
