import React from "react";
import styles from "./Blog.module.scss";
import blog1 from "../../About/blog-01.jpg";
import blog2 from "../../About/blog-02.jpg";
import blog3 from "../../About/blog-03.jpg";

const Blog = () => {
  return (
    <div>
      <div className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.blogContainerTop}>
            <h3>OUR BLOG</h3>
          </div>
          <div className={styles.blogContainerBottom}>
            <div className={styles.blogContainerBottomCards}>
              <img src={blog1} alt="" />
              <h4>Black Friday Guide: Best Sales & Discount Codes</h4>
              <span>By Nancy Ward on July 22, 2017</span>
              <p>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
            <div className={styles.blogContainerBottomCards}>
              <img src={blog2} alt="" />
              <h4>The White Sneakers Nearly Every Fashion Girls Own</h4>
              <span>By Nancy Ward on July 22, 2017</span>
              <p>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
            <div className={styles.blogContainerBottomCards}>
              <img src={blog3} alt="" />
              <h4>Black Friday Guide: Best Sales & Discount Codes</h4>
              <span>By Nancy Ward on July 22, 2017</span>
              <p>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
