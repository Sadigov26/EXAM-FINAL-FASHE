import React, { useState, useEffect } from "react";
import styles from "./Banner.module.scss";
import imgLeft from "../../About/banner-08.jpg";
import imgRight from "../../About/shop-item-09.jpg";

const Banner = () => {
  const [days, setDays] = useState(69);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(interval);
            } else {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContainerLeft}>
            <img src={imgLeft} alt="" />
          </div>
          <div className={styles.bannerContainerRight}>
            <div className={styles.RightTop}>
              <img src={imgRight} alt="" />
              <p>Gafas sol Hawkers one</p>
              <div className={styles.bannerPrice}>
                <del>$29.50</del>
                <p>$15.90</p>
              </div>
            </div>
            <div className={styles.RightBottom}>
              <div className={styles.RightBottomNumber}>
                <p>{days}</p>
                <p>DAYS</p>
              </div>
              <div className={styles.RightBottomNumber}>
                <p>{hours}</p>
                <p>HRS</p>
              </div>
              <div className={styles.RightBottomNumber}>
                <p>{minutes}</p>
                <p>mins</p>
              </div>
              <div className={styles.RightBottomNumber}>
                <p>{seconds}</p>
                <p>secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
