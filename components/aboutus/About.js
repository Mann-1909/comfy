import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <div>
        <div className={styles['wrapper']}>
            <div className={styles['text-wrapper']}>
                <div className={styles['title']}>
                    About Us
                </div>
                <div className={styles['text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </div>
            <div className={styles['image']}></div>
            
            
        </div>
    </div>
  )
}
