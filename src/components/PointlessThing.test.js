import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import PointlessThing from "./PointlessThing";

const middlewares = []; // in case you need to use one you can just import it and add it here
const mockStore = configureStore(middlewares);
const initialState = {
  pointlessBoolean: false,
};
const store = mockStore(initialState);

describe("PointlessThing", () => {
  test("should match snapshot", () => {
    const pointlessThing = renderer
      .create(
        <Provider store={store}>
          <PointlessThing />
        </Provider>
      )
      .toJSON();

    expect(pointlessThing).toMatchSnapshot();
  });
});
