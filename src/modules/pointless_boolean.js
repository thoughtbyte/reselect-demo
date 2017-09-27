const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN';

export function toggleBoolean(currentVal) {
  return {
    type: TOGGLE_BOOLEAN,
    val: currentVal,
  };
}

export default function reducer(state = true, action) {
  switch (action.type) {
    case TOGGLE_BOOLEAN:
      console.log(action);
      return !action.val;
    default:
      return state;
  }
}