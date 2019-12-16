import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "incre":
      return state + 1;
    case "decre":
      return state + 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  //Miltuple Reducer
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count : {count} </div>
      <button onClick={() => dispatch("incre")}>Incre</button>
      <button onClick={() => dispatch("decre")}>Decre</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>Count Two : {countTwo} </div>
      <button onClick={() => dispatchTwo("incre")}>Incre</button>
      <button onClick={() => dispatchTwo("decre")}>Decre</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default CounterThree;
