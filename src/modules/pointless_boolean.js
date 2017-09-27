const TOGGLE_BOOL = 'TOGGLE_BOOL';

export function toggleBoolean(currentVal) {
  return {
    type: TOGGLE_BOOL,
    val: currentVal,
  };
}

export default function reducer(state = true, action) {
  console.log(action)
  switch (action.type) {
    case TOGGLE_BOOL:
      return !action.val;
    default:
      return state;
  }
}