import { combineReducers } from "redux";

import pointlessBoolean from "./pointlessBoolean";
import bookList from "./bookList";

const globalState = combineReducers({
  pointlessBoolean,
  bookList,
});

export default globalState;
