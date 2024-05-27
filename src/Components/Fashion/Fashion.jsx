import React from "react";
import styles from "./Fashion.module.scss";
import banner2 from "../../About/banner-02 (2).jpg";
import banner5 from "../../About/banner-05.jpg";
import banner3 from "../../About/banner-03 (1).jpg";
import banner7 from "../../About/banner-07.jpg";
import banner4 from "../../About/banner-04.jpg";
import bg1 from "../../About/bg-01.jpg";
function Fashion() {
  return (
    <section className={styles.images}>
      <div className={styles.containerImages}>
        <div className={styles.imageOne}>
          <img src={banner2} alt="" />
          <div className={styles.buttonOne}>
            <button>DRESS</button>
          </div>
          <img src={banner5} alt="" />
          <button className={styles.sung}>SUNGLASSES</button>
        </div>
        <div className={styles.imageTwo}>
          <img src={banner3} alt="" />
          <div className={styles.buttonTwo}>
            <button>FOOTHERWEAR</button>
          </div>
          <img src={banner7} alt="" />
        </div>
        <div className={styles.imageThree}>
          <img src={banner4} alt="" />
          <button className={styles.bag}>BAGS</button>
          <img src={bg1} alt="" />
          <div className={styles.buttonThree}>
            <h1>Sign up & get 20% off</h1>
            <p>
              Be the first to know about the latest fashion news and get
              exclusive offers
            </p>
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fashion;
