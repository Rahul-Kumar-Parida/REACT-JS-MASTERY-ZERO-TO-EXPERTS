import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  //😍 Use State.....
  let [calVal, setCalVal] = useState("45");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDIsplayValue = calVal + buttonText;
      setCalVal(newDIsplayValue);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
