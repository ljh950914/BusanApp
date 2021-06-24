import React, { createContext } from "react";

export const AppContext = createContext();

const App = () => {
  const [text, setText] = useState("test");

  const logText = (text) => {
    console.log("test");
  };
  return (
    <AppContext.Provider value='1'><ViewLayout />
    </AppContext.Provider>
  );
};
export default App;