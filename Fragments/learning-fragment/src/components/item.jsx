import styles from "./Item.module.css";

function item({ foodItem }) {
  return (
    <li className={`${Styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
}

export default item;
