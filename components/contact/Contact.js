import React from 'react'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div>
        <div className={styles['wrapper']}>
            <div className={styles['wrapper-left']}>
                <div className={styles['contact']}>
                    Contact
                </div>
                <div className={styles['name']}>
                    
                </div>
                <div className={styles['email']}>
                
                </div>
                <div className={styles['message']}>

                </div>
                <div className={styles['button']}>
                Send
                </div>
            </div>
            <div className={styles['wrapper-right']}></div>
        </div>




    </div>
  )
}
