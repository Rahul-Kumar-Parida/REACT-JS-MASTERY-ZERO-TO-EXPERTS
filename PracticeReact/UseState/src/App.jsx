import { useState } from "react";
import Btn from "./components/ButtonCl";
import RedButton from "./components/RedButton";
function App() {
  let [count, setCount] = useState(0);

  const CntNum = function () {
    setCount(count + 1);
  };

  const reduceNum = () => {
    setCount(count - 1);
  };
  return (
    <center>
      <h1>COUNTER MASTER</h1>
      <h1>{count}</h1>
      <Btn hello={CntNum}></Btn>
      <RedButton hello2={reduceNum}></RedButton>
    </center>
  );
}

export default App;
