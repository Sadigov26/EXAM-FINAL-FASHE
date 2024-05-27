import React from "react";
import style from "./BlogTwo.module.scss";
import galary1 from "../../About/gallery-03.jpg";
import galary2 from "../../About/gallery-07.jpg";
import galary3 from "../../About/gallery-09.jpg";
import galary4 from "../../About/gallery-13.jpg";
import galary5 from "../../About/gallery-15.jpg";

const BlogTwo = () => {
  return (
    <div>
      <div className={style.blogTwo}>
        <div className={style.blogTwoContainer}>
          <div className={style.blogTwoContainerTop}>
            <h3>@ FOLLOW US ON INSTAGRAM</h3>
          </div>
          <div className={style.blogTwoContainerMidle}>
            <img src={galary1} alt="" />
            <img src={galary2} alt="" />
            <img src={galary3} alt="" />
            <img src={galary4} alt="" />
            <img src={galary5} alt="" />
          </div>
          <div className={style.blogTwoContainerbottom}>
            <div className={style.blogTwoContainerbottomDesk}>
              <h3>Free Delivery Worldwide</h3>
              <p>Click here for more info</p>
            </div>
            <div className={style.blogTwoContainerbottomDesk}>
              <h3>30 Days Return</h3>
              <p>Simply return it within 30 days for an exchange.</p>
            </div>
            <div className={style.blogTwoContainerbottomDesk}>
              <h3>Store Opening</h3>
              <p>Shop open from Monday to Sunday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
