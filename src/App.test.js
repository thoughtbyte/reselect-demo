import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

const middlewares = []; // in case you need to use one you can just import it and add it here
const mockStore = configureStore(middlewares);
const initialState = {
  pointlessBoolean: false,
  bookList: [
    { bookTitle: "Clean Code", authorName: "Robert C. Martin" },
    { bookTitle: "The Pragmatic Programmer", authorName: "Andrew Hunt" },
    { bookTitle: "You Don't Know JS", authorName: "Kyle Simpson" },
    { bookTitle: "Eloquent JavaScript", authorName: "Marijn Haverbeke" },
  ],
};
const store = mockStore(initialState);

describe("App", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
  test("should match snapshot", () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();

    expect(app).toMatchSnapshot();
  });
});
