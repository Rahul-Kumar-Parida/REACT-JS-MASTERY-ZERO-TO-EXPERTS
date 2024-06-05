import { useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("I am the first useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("I am the second useEffect"); //First update data
  }, []);
  useLayoutEffect(() => {
    console.log("I am the third useEffect");
  }, []);
  useEffect(() => {
    console.log("I am the fourth useEffect");
  }, []);
  return <></>;
}

export default App;
