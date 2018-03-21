import reducer, { TOGGLE_BOOLEAN, toggleBoolean } from "./pointlessBoolean";

describe("pointlessBoolean state", () => {
  test("toggleBoolean() should create an action to set boolean", () => {
    const expectedAction = {
      type: TOGGLE_BOOLEAN,
      val: true,
    };
    expect(toggleBoolean(true)).toEqual(expectedAction);
  });
  test("reducer should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(true);
  });
  test("reducer should handle TOGGLE_BOOLEAN true to false", () => {
    expect(reducer(null, { type: TOGGLE_BOOLEAN, val: true })).toEqual(false);
  });

  test("reducer should handle TOGGLE_BOOLEAN false to true", () => {
    expect(reducer(null, { type: TOGGLE_BOOLEAN, val: false })).toEqual(true);
  });
});
