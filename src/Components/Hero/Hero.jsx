import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <h3>Women Collection 2018</h3>
          <h1>NEW ARRIVALS</h1>
          <button><a href="/basket">SHOP NOW</a></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
