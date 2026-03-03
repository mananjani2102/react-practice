import styles from "./Display.module.css";

function Display(props) {
  return (
    <div>
      <input type="text" className={styles.display} />
    </div>
  );
}

export default Display;
