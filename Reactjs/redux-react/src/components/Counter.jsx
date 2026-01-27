import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slice/counter.slice";

function Counter() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counterSlice);
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>INC</button>
    </>
  );
}

export default Counter;
