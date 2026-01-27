import { useCallback, useMemo, useState } from "react";
import Text from "./Text";

function App() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  let result = useMemo(() => {
    return count % 5 === 0 ? "Yes" : "No";
  }, [count, count1]);

  let updateState = useCallback(() => {
    setCount1(count1 + 5);
  }, [count1]);
  return (
    <>
      <section className="flex flex-col items-center">
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button
          className="bg-red-500 px-10 "
          onClick={() => setCount(count + 1)}
        >
          INC
        </button>
        <Text updateState={updateState} />
      </section>
    </>
  );
}

export default App;
