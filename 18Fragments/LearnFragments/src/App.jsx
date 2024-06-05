// import React from "react";
import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = [];
  // let foodItems = ["SALAD", "BRCOLI", "PANEER", "CHICKEN", "RICE"];

  //😍 HOOKS...
  // let textStateArr = useState("Food Item Entered By User!!!");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textToShow, setTextState] = useState("Food Item Entered By User!!!");
  let [foodItems, setFoodItem] = useState(["SALAD", "BRCOLI", "PANEER"]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
    setTextState(event.target.value);
  };

  //🍀If-else Used
  // if (foodItems.length === 0) {
  //   return <h2>I am Still Hungry</h2>;
  // }

  return (
    <>
      <Container>
        <h1 className="food-heading">Food Items</h1>
        {/* 🍀 Ternary operator Used */}
        {/* {foodItems.length === 0 ? <h2>I am Still Hungry</h2> : null} */}

        {/* 🍀 Logical Operators Used */}
        {/* {foodItems.length === 0 && <h2>I am Still Hungry</h2>} */}

        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
        {/* <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul> */}
      </Container>
      <Container>
        <h1 className="food-heading">Veg Items</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <h1 className="food-heading">NonVeg Items</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <h3>Above Foods Are Very Tasty And Order Now </h3>
      </Container>
    </>
  );
}

export default App;
