import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialValue = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement": {
      return {
        count: state.count - action.payload,
      };
    }
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
