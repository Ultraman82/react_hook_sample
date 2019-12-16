import React from "react";
import "./App.css";
//import DataFetching from "./components/DataFetching";
import ComponentF from "./components/ComponentF";
import ComponentE from "./components/ComponentE";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ name: "Edgar", id: "dd" }}>
        <ChannelContext.Provider value={"CodeEvolutution"}>
          <ComponentE></ComponentE>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
