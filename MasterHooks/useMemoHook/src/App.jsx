import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [myNum, setMyNUM] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNUM(myNum + 1);
  };
  const countNumber = (num) => {
    console.log("HEllo Guys " + num);
    return num;
  };
  const CheckData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  return (
    <div>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new Number: {CheckData}</p>
      <br />
      <button onClick={() => setShow(!show)}>
        {show ? "You Clicked me" : "Click me Plz"}
      </button>
    </div>
  );
}

export default App;
