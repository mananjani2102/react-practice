import styles from "./ButtonsContainer.module.css";

function ButtonsContainer(props) {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonName.map((buttonName) => (
          <button className={styles.button}>{buttonName}</button>
        ))}
      </div>
    </div>
  );
}

export default ButtonsContainer;
