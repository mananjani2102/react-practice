import styles from "./item.module.css";

function item({ foodItem }) {

  const handleBuyButtonClicked = (foodItem) =>{
    console.log(`${foodItem}being bought`)
  }
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}
      onClick={()=> handleBuyButtonClicked (foodItem)}
      >Buy</button>
    </li>
  );
}

export default item;
