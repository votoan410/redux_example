import { combineReducers } from "redux";

export default function reducerValues(value = 0, action) {
  const { payload, type } = action;
  switch (type) {
    case "FETCH":
      return payload;

    case "ADD":
      return value - payload;

    case "SUB":
      return value + payload;

    default:
      return value;
  }
}
