const SET_LIST = 'SET_LIST';

export function setList(list) {
  return {
    type: SET_LIST,
    list,
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_LIST:
      return action.list;
    default:
      return state;
  }
}