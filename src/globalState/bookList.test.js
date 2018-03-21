import reducer, { SET_LIST, setList } from "./bookList";

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
  test.skip("getAuthors() selector should return authors", () => {});
  test.skip("getTitles() selector should return titles", () => {});
});
