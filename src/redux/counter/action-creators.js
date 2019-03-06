import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./types";

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
  payload: null
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT,
  payload: null
});
