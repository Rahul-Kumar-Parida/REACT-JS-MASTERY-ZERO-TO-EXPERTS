import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    {
      count === 0 ? setCount : setCount(count - 1);
    }
  };

  useEffect(() => {
    document.title = count;
  });
  return (
    <div className="container">
      <div className="counter-app">
        <h1>COUNT NUMBER</h1>
        <div className="counter">
          <button onClick={increase}>+</button>
          <h1>{count}</h1>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
