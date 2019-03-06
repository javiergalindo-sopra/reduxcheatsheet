import { COUNTER_INCREMENT } from "./types";

const INITIAL_STATE = {
  number: 0
};

const counterIncrement = (prevState, action) => ({
  counter: prevState.counter + 1
});

const reducerMap = {
  [COUNTER_INCREMENT]: counterIncrement
};

export default (state = INITIAL_STATE, action) =>
  reducerMap[action.type]
    ? reducerMap[action.type](state, action)
    : INITIAL_STATE;
