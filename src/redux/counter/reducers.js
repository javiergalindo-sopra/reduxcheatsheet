import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./types";

const INITIAL_STATE = {
  number: 0
};

export const counterIncrement = (prevState, action) => ({
  number: prevState.number + 1
});

export const counterDecrement = (prevState, action) => ({
  number: prevState.number - 1
});

const reducerMap = {
  [COUNTER_INCREMENT]: counterIncrement,
  [COUNTER_DECREMENT]: counterDecrement
};

export default (state = INITIAL_STATE, action) =>
  reducerMap[action.type]
    ? reducerMap[action.type](state, action)
    : INITIAL_STATE;
