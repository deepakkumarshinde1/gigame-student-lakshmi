import { useState } from "react";
import Input from "./Input";
import { InputContextProvider } from "./context/input.context";

function App() {
  return (
    <div>
      <InputContextProvider>
        <Input />
      </InputContextProvider>
    </div>
  );
}

export default App;
