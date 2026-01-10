import { useEffect, useState } from "react";

function Fn() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("mounting");
  }, []); // mounting

  useEffect(() => {
    console.log("updating");
  }, [counter2]);

  let inc = () => {
    setCounter(counter + 1);
  };

  let inc2 = () => {
    setCounter2(counter2 + 1);
  };
  return (
    <div>
      Fn <button onClick={inc}>INC {counter}</button>
      <button onClick={inc2}>INC2 {counter2}</button>
    </div>
  );
}

export default Fn;
