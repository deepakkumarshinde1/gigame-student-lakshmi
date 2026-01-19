import React, { useState } from "react";
import { useInputContext } from "./context/input.context";

function Input() {
  let { text, setText } = useInputContext();
  return (
    <input
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
}

export default Input;
