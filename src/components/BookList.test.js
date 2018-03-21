import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import BookList from "./BookList";

const middlewares = []; // in case you need to use one you can just import it and add it here
const mockStore = configureStore(middlewares);
const initialState = {
  bookList: [
    { bookTitle: "Clean Code", authorName: "Robert C. Martin" },
    { bookTitle: "The Pragmatic Programmer", authorName: "Andrew Hunt" },
    { bookTitle: "You Don't Know JS", authorName: "Kyle Simpson" },
    { bookTitle: "Eloquent JavaScript", authorName: "Marijn Haverbeke" },
  ],
};
const store = mockStore(initialState);

describe("BookList", () => {
  test("should match snapshot", () => {
    const bookList = renderer
      .create(
        <Provider store={store}>
          <BookList />
        </Provider>
      )
      .toJSON();

    expect(bookList).toMatchSnapshot();
  });
});
