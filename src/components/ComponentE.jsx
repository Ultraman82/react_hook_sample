import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  const { name, id } = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {name} - {id}
    </div>
  );
}

export default ComponentE;
