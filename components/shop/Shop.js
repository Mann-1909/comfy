import React from 'react'
import styles from "./shop.module.css"

export default function Shop() {
  return (
    <div>
        <div className={styles['main-wrapper']}>
            <div className={styles['wrapper']}>
                <div className={styles['img']} ></div>
                <div className={styles['heading']}>Red Sofa</div>
                <div className={styles['btn']}></div>
            </div>
            <div className={styles['wrapper']}>
                <div className={styles['img']} ></div>
                <div className={styles['heading']}>Red Sofa</div>
                <div className={styles['btn']}></div>
            </div>
            <div className={styles['wrapper']}>
                <div className={styles['img']} ></div>
                <div className={styles['heading']}>Red Sofa</div>
                <div className={styles['btn']}></div>
            </div>
            
        </div>
    </div>
  )
}
