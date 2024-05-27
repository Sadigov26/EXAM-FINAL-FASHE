import React from "react";
import styles from "./Header.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../About/logo (19).png";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerContainerTop}>
            <div className={styles.headerContainerTopIcons}>
              <FaFacebookF />
              <FaInstagram />
              <FaPinterestP />
              <FaSnapchatGhost />
              <FaYoutube />
            </div>
            <div className={styles.headerContainerTopDesk}>
              <p>Free shipping for standard order over $100</p>
            </div>
            <div className={styles.headerContainerTopEmail}>
              <p>fashe@example.com</p>
              <select name="" id="">
                <option value="u">U..</option>
              </select>
            </div>
          </div>
          <div className={styles.headerContainerBottom}>
            <div className={styles.headerContainerBottomLogo}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.headerContainerBottomNavbar}>
              <ul className={styles.homeDrop}>
                <li>
                  <a href="/" className={styles.home}>
                    Home
                    <div className={styles.drop}>
                      <li>
                        <a href="">HomePage V1</a>
                      </li>
                      <li>
                        <a href="">HomePage V1</a>
                      </li>
                      <li>
                        <a href="">HomePage V1</a>
                      </li>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/basket">Basket</a>
                </li>
                <li>
                  <a href="/wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="/dashboard" style={{ color: "orangered" }}>
                  Dashboard
                  </a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.headerContainerBottomIcons}>
            <FaBars className={styles.bars} style={{display:"none"}}/>
              <FaRegUserCircle className={styles.headerIcons} />
              <BsBasket3 className={styles.headerIcons} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
