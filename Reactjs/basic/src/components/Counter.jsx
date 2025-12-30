import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
    // count = count + 1;
    // console.log(count);
  };
  return (
    <>
      <h1>Hello , {count}</h1>
      <button onClick={inc}>Inc</button>
    </>
  );
}

export default Counter;
