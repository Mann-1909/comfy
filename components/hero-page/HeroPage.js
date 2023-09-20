import React from "react";
import styles from "./hero-page.module.css";

export default function HeroPage() {
  return (
    <div>
      <div className={styles['wrapper']}>
        <div className={styles['text-wrapper']}>
          <div className={styles['text']}>
            Make your room comfy and beautiful.
          </div>
          <div className={styles['btn-wrapper']}>
            <div className={styles['shop']}>Shop</div>
            <div className={styles['contact']}>Contact</div>
          </div>
        </div>
        <div className={styles['image']}></div>
          
      </div>
    </div>
  );
}
