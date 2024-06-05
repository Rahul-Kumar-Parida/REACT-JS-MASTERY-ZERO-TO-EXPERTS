import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Trying To Learn React with Bootstrap
      <a className="btn btn-primary" href="#" role="button">
        Link
      </a>
      <button className="btn btn-primary" type="submit">
        Button
      </button>
      <input className="btn btn-primary" type="button" value="Input"></input>
      <input className="btn btn-primary" type="submit" value="Submit"></input>
      <input className="btn btn-primary" type="reset" value="Reset"></input>
    </div>
  );
}

export default App;
