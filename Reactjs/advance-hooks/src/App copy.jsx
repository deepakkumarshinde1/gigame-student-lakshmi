import React, { useReducer, useState } from "react";
import Input from "./Input";

let initialState = {
  count1: 100,
  count2: 200,
  count3: 300,
};

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INC_1":
      return { ...state, count1: state.count1 + 1 };

    case "INC_2":
      return { ...state, count2: state.count2 + 1 };

    case "INC_3":
      return { ...state, count3: state.count3 + 1 };
    default:
      return { ...state };
  }
};

// action => {type:"", payload:data}
function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="gap-5 flex">
      <button
        onClick={() => dispatch({ type: "INC_1" })}
        className="bg-blue-500 text-amber-50 text-2xl p-2 px-[2.5rem]"
      >
        CLICK {state.count1}
      </button>

      <button
        onClick={() => dispatch({ type: "INC_2" })}
        className="bg-red-500 text-amber-50 text-2xl p-2 px-[2.5rem]"
      >
        CLICK {state.count2}
      </button>

      <button
        onClick={() => dispatch({ type: "INC_3" })}
        className="bg-green-500 text-amber-50 text-2xl p-2 px-[2.5rem]"
      >
        CLICK {state.count3}
      </button>
      <Input />
    </div>
  );
}

export default App;

// caching
// component, text, function
