import { createContext, useContext, useState } from "react";

// create context
let InputContext = createContext({});

// create a hook to consume the context in functional component
export function useInputContext() {
  return useContext(InputContext);
}

// create a wrapper component
export function InputContextProvider({ children }) {
  let [text, setText] = useState("");
  let shared = { text, setText };
  return (
    <InputContext.Provider value={shared}>{children}</InputContext.Provider>
  );
}
