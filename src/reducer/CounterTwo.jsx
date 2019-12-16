import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incre":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decre":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incre2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decre2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>FistCount : {count.firstCounter} </div>
      <div>SecondCount : {count.secondCounter} </div>
      <button onClick={() => dispatch({ type: "incre", value: 1 })}>
        Incre
      </button>
      <button onClick={() => dispatch({ type: "decre", value: 1 })}>
        Decre
      </button>
      <button onClick={() => dispatch({ type: "incre", value: 5 })}>
        Incre 5
      </button>
      <button onClick={() => dispatch({ type: "decre", value: 5 })}>
        Decre 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "incre2", value: 1 })}>
          Incre counter 2
        </button>
        <button onClick={() => dispatch({ type: "decre2", value: 1 })}>
          Decre counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
