import React from "react";
import styles from "./footer.module.css";

export default function () {
  return (
    <div>
      <div className={styles["wrapper"]}>
        <div className={styles["left"]}>
          <div className={styles["logoline"]}>
            <div className={styles["logo"]}></div>
            <div className={styles["comfy"]}>Comfy.</div>
          </div>
          <div className={styles["copyright"]}>© Comfy™ 2021</div>
        </div>
        <div className={styles["right"]}>
            <div className={styles["social"]}>Social Media</div>
            <div className={styles["site"]}>Instagram<svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
  <path d="M15.8874 15.8945L15.8874 18.6363L26.7476 18.646L14.9151 30.4786L16.8596 32.4231L28.6922 20.5906L28.6825 31.4509L31.4437 31.4509V15.8945H15.8874Z" fill="white"/>
</svg></div>
            <div className={styles["site"]}>Facebook<svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
  <path d="M15.8874 15.8945L15.8874 18.6363L26.7476 18.646L14.9151 30.4786L16.8596 32.4231L28.6922 20.5906L28.6825 31.4509L31.4437 31.4509V15.8945H15.8874Z" fill="white"/>
</svg></div>
            <div className={styles["site"]}>Twitter<svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
  <path d="M15.8874 15.8945L15.8874 18.6363L26.7476 18.646L14.9151 30.4786L16.8596 32.4231L28.6922 20.5906L28.6825 31.4509L31.4437 31.4509V15.8945H15.8874Z" fill="white"/>
</svg></div>
        </div>
      </div>
    </div>
  );
}
