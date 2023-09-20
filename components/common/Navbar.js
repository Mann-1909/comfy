import React from "react";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <div>
      <div className={styles['wrapper']}>
        <div className={styles['wrapper-left']}>
          <div className={styles['logo']}></div>
          <div className={styles['title']}>Comfy.</div>
        </div>
        <div className={styles['wrapper-right']}>
          <div className={styles['link']}>Home</div>
          <div className={styles['link']}>About</div>
          <div className={styles['link']}>Shop</div>
          <div className={styles['link']}>Contact</div>
        </div>
      </div>
    </div>
  );
}
