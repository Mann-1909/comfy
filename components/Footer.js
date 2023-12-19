import React from "react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['left']}>
            <div className={styles['contact-us']}>Contact Us  <div className={styles['line']}></div> </div>
            
            <div className={styles['email']}>
                <div className={styles['email-icon']}></div>
                xyz@nitc.ac.in
            </div>
            <div className={styles['location']}>
                <div className={styles['location-icon']}></div>
                NIT Calicut, Kerala
            </div>
        </div>
        <div className={styles['center']}>
            <div className={styles['thanks']}>Thanks For Visiting our page</div>
            <div className={styles['icon']}></div>
            <div className={styles['dnd']}>
                The Dance & Dramatics Club<div className={styles['copyright-icon']}></div>
            </div>
            <div className={styles['credits']}>
                Credits to <div className={styles['gdsc-icon']}></div> GDSC NIT Calicut 
            </div>
        </div>
        <div className={styles['right']}>
            <div className={styles['visit']}>Visit Us  <div className={styles['line']}></div> </div>
            
            <div className={styles['insta']}>
                <div className={styles['insta-icon']}></div> Instagram
            </div>
            <div className={styles['facebook']}>
                <div className={styles['facebook-icon']}></div> Facebook
            </div>
            <div className={styles['lnkdin']}>
                <div className={styles['lnkdin-icon']}></div> LinkedIn
            </div>
                
        </div>
    </div>
  )
}
