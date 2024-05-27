import React from "react";
import styles from "./Footer.module.scss";
import card from "../../About/cardddd.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerTop}>
            <div className={styles.footerNavbarTouch}>
              <h3> GET IN TOUCH</h3>
              <p>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
              <div className={styles.footerİcons}>
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
                <FaSnapchatGhost />
                <FaYoutube />
              </div>
            </div>
            <div className={styles.footerNavbarCategory}>
              <h3>CATEGORIES</h3>
              <ul>
                <li>
                  <a href="">Men</a>
                </li>
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">Dresses</a>
                </li>
                <li>
                  <a href="">Sunglasses</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavbarLink}>
              <h3>LINKS</h3>
              <ul>
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Returns</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavbarHelp}>
              <h3>HELP</h3>
              <ul>
                <li>
                  <a href="">Track Order</a>
                </li>
                <li>
                  <a href="">Returns</a>
                </li>
                <li>
                  <a href="">Shipping</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavbarNews}>
              <h3>NEWSLETTER</h3>
              <input
                type="text"
                name=""
                id=""
                placeholder="example@gmail.com"
              />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.footerContainerBottom}>
            <img src={card} alt="" />
            <p>Copyright © 2017 Colorlib. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
