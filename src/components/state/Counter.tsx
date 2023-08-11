import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction; // descriminated unions

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
    case "reset": {
      return initialValue;
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
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
