import { useState } from "react";
import List from "./components/List";
import Counter from "./components/Counter";

function App() {
  let [inputText, setInputText] = useState("deepak");
  let [list, setList] = useState([]);
  let [product, setProduct] = useState({
    name: "Dell",
    price: 45000,
  });
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <List />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
