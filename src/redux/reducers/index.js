import { INCREMENT, DECREMENT } from "../actions";
import { combineReducers } from "redux";

const initState = {
  value: 0,
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: action.payload };
    case DECREMENT:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter });

export default rootReducer;
