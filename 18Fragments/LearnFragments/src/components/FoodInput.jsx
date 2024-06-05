import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   };
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Food Items Here"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
