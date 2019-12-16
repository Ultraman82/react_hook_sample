import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      D - {countContext.countState}
      <button onClick={() => countContext.countDispatch("incre")}>Incre</button>
      <button onClick={() => countContext.countDispatch("decre")}>Decre</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
