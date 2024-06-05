import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>The Number Of Times render: {count.current}</p>
    </div>
  );
}

export default App;
