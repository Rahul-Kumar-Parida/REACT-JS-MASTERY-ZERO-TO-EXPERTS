import { useReducer } from "react";
import "./App.css";

let intialValue = 0;
function App() {
  const reducer = (state, action) => {
    if (action.type === "INC") {
      return (state = state + 1);
    }
    if (action.type === "DEC") {
      let newNum = 0;
      state >= 1 ? (newNum = state - 1) : (newNum = 0);
      return newNum;
    }
    return state;
  };
  const [count, dispatch] = useReducer(reducer, intialValue);

  return (
    <div className="container">
      <div className="counter-app">
        <h1>COUNT NUMBER</h1>
        <div className="counter">
          <button onClick={() => dispatch({ type: "INC" })}>+</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
