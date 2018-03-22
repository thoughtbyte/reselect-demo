import reducer, { SET_LIST, setList, getAuthors, getTitles } from "./bookList";

const state = {
  bookList: [
    { bookTitle: "Clean Code", authorName: "Robert C. Martin" },
    { bookTitle: "The Pragmatic Programmer", authorName: "Andrew Hunt" },
    { bookTitle: "You Don't Know JS", authorName: "Kyle Simpson" },
    { bookTitle: "Eloquent JavaScript", authorName: "Marijn Haverbeke" },
  ],
};

describe("bookList state", () => {
  test("setList() should create an action to set list", () => {
    const expectedAction = {
      type: SET_LIST,
      list: [{ authorName: "name", bookTitle: "title" }],
    };
    expect(setList(expectedAction.list)).toEqual(expectedAction);
  });
  test("reducer should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  test("reducer should handle SET_LIST true to false", () => {
    const action = {
      type: SET_LIST,
      list: [{ authorName: "name", bookTitle: "title" }],
    };
    expect(reducer([], action)).toEqual(action.list);
  });
  test("getAuthors() selector should return authors", () => {
    const expected = [
      "Robert C. Martin",
      "Andrew Hunt",
      "Kyle Simpson",
      "Marijn Haverbeke",
    ];
    expect(getAuthors(state)).toEqual(expected);
  });
  test("getTitles() selector should return titles", () => {
    const expected = [
      "Clean Code",
      "The Pragmatic Programmer",
      "You Don't Know JS",
      "Eloquent JavaScript",
    ];
    expect(getTitles(state)).toEqual(expected);
  });
});
