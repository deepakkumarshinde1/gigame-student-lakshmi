import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Counter />
      <Input />
    </>
  );
}

export default App;
