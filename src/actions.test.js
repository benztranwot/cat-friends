import { CHANGE_SEARCH_FIELD, REQUEST_CATS_PENDING, REQUEST_CATS_SUCCESS, REQUEST_CATS_FAILED } from "./constants";
import * as actions from "./actions";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  test("should create an action to search cats", () => {
    const text = "hola";
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestCats", () => {
  test("handle requesting cats API", () => {
    const store = mockStore();
    store.dispatch(actions.requestCats());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: "REQUEST_CATS_PENDING" });
  });
});
