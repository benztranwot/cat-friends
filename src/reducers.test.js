import { CHANGE_SEARCH_FIELD, REQUEST_CATS_PENDING, REQUEST_CATS_SUCCESS, REQUEST_CATS_FAILED } from "./constants";
import * as reducers from "./reducers";

describe("searchCats", () => {
  const initialStateSearch = {
    searchField: "",
  };
  test("should return the initial state", () => {
    expect(reducers.searchCats(undefined, {})).toEqual({ searchField: "" });
  });

  test("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchCats(undefined, {
        type: CHANGE_SEARCH_FIELD,
        payload: "cats",
      })
    ).toEqual({ searchField: "cats" });
  });
});

describe("requestCats", () => {
  const initialStateCats = {
    isPending: false,
    cats: [],
    error: "",
  };

  const testCats = [
    {
      id: 1,
      name: "Steve",
      username: "StevenHe",
      email: "steve@gmail.com",
    },
  ];

  test("should return the initial state", () => {
    expect(reducers.requestCats(undefined, {})).toEqual(initialStateCats);
  });

  test("should handle REQUEST_CATS_PENDING action", () => {
    expect(
      reducers.requestCats(initialStateCats, {
        type: REQUEST_CATS_PENDING,
      })
    ).toEqual({ ...initialStateCats, isPending: true });
  });

  test("should handle REQUEST_CATS_SUCCESS action", () => {
    expect(
      reducers.requestCats(initialStateCats, {
        type: REQUEST_CATS_SUCCESS,
        payload: testCats,
      })
    ).toEqual({ ...initialStateCats, cats: testCats });
  });

  test("should handle REQUEST_CATS_FAILED action", () => {
    expect(
      reducers.requestCats(initialStateCats, {
        type: REQUEST_CATS_FAILED,
        payload: "Something went wrong!",
      })
    ).toEqual({ ...initialStateCats, error: "Something went wrong!" });
  });
});
