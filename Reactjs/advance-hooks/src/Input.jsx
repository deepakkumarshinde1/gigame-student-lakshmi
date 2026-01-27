import React, { forwardRef, memo, useRef, useState } from "react";

function Input() {
  // let [text, setText] = useState("");
  let input = {
    username: useRef(null),
  };
  let getData = () => {
    console.log(inputText.current.value);
  };
  return (
    <>
      <input
        className=" p-2 w-60 border-2 border-amber-500 "
        type="text"
        placeholder="Enter Text"
        // value={text}
        // onChange={(event) => setText(event.target.value)}
        ref={inputText}
      />
      <input
        className=" p-2 w-60 border-2 border-amber-500 "
        type="text"
        placeholder="Enter Text"
        // value={text}
        // onChange={(event) => setText(event.target.value)}
        ref={inputText}
      />
      <input
        className=" p-2 w-60 border-2 border-amber-500 "
        type="text"
        placeholder="Enter Text"
        // value={text}
        // onChange={(event) => setText(event.target.value)}
        ref={inputText}
      />
      <button onClick={getData}>Submit</button>
    </>
  );
}

export default Input;
// export default memo(forwardRef(Input));
// HOC => higher order component
// memo
