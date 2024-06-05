import { useState } from "react";
import "./App.css";
function App() {
  let Time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(Time);
  const changeTime = () => {
    Time = new Date().toLocaleTimeString();
    setTime(Time);
  };
  return (
    <>
      <div className="ClookDiv">
        <p>{time}</p>
        <button onClick={changeTime}>Get Time</button>
      </div>
    </>
  );
}

export default App;
