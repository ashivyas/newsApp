import React from "react";
import Loading from "../src/component/Loading";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
