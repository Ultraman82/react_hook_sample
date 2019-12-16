import React, { useState } from "react";
import HookMouse from "./HookMouse";
function MouseContainer() {
  const [display, setdisplay] = useState(true);
  //Toggle display
  return (
    <div>
      <button onClick={() => setdisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
