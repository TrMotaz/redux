import { INCREMENT, DECREMENT, RESET } from "./actionTypes";
const initState = {
  counter: 0
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter ? state.counter - 1 : 0
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};
