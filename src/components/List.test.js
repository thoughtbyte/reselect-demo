import React from "react";
import renderer from "react-test-renderer";

import List from "./List";

const props = {
  list: [
    "Clean Code",
    "The Pragmatic Programmer",
    "You Don't Know JS",
    "Eloquent JavaScript",
  ],
};

describe("List", () => {
  test("should match snapshot", () => {
    const list = renderer.create(<List {...props} />).toJSON();

    expect(list).toMatchSnapshot();
  });
});
