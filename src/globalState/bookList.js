import { createSelector } from "reselect";

export const SET_LIST = "SET_LIST";

export function setList(list) {
  return {
    type: SET_LIST,
    list,
  };
}

export default function reducer(state = [], action) {
  console.info("ACTION IN LIST REDUCER:", action.type);
  switch (action.type) {
    case SET_LIST:
      return action.list;
    default:
      return state;
  }
}

const getBookList = state => state.bookList;

export const getAuthors = createSelector(getBookList, list =>
  list.map(item => item.authorName)
);

export const getTitles = createSelector(getBookList, list =>
  list.map(item => item.bookTitle)
);
