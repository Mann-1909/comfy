import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <div className={styles["wrapper"]}>
        <div className={styles["wrapper-left"]}>
          <form className={styles["form"]}>
            <div className={styles["contact"]}>Contact</div>
            <input
              type="text"
              placeholder="Name"
              className={styles["name"]}
            ></input>
            <input
              type="text"
              placeholder="Email"
              className={styles["email"]}
            ></input>
            <textarea
              placeholder="Message"
              className={styles["message"]}
            ></textarea>
            <div className={styles["button"]}>Send</div>
          </form>
        </div>

        <div className={styles["wrapper-right"]}></div>
      </div>
    </div>
  );
}
