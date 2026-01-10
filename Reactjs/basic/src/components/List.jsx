import { useState } from "react";
import Text from "./Text";
import Fn from "./Fn";

function List(props) {
  let [toggle, setToggle] = useState(false);
  let [list, setList] = useState([1, 1, 2, 3, 4, 5, 6]);
  return (
    <>
      <div>List {props.text}</div>
      {/* {toggle ? <Text /> : null} */}
      {toggle && <Text />}

      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <Fn />
    </>
  );
}

export default List;

// mounting  => once per life cycle
// updating => each time when a component gets update
// unmounting => once per life cycle
