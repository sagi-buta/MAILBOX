import React from "react";
import styles from "./style.module.css";

export default function NewMessage() {
  return (
    <div className={styles.hiro}>
      <div className={styles.header}>
        <h1> Send new message</h1>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <div>Sobjeckt</div>
          <input type="text" />
        </div>
        <div className={styles.input}>
          <div>Members</div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
