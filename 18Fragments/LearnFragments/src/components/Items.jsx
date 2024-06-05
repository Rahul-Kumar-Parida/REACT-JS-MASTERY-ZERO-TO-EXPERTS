import styles from "./Items.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const BuyNuttonClickd = (event) => {
  //   console.log(event);
  //   alert(`${foodItem} being bought`);
  // };

  return (
    <li
      className={`${styles["kgItem"]} list-group-item ${bought && "active"} `}
    >
      <span className={`${styles["kgSpan"]}`}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={(event) => BuyNuttonClickd(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
