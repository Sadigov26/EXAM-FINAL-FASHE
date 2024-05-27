import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.scss";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

 const deleteItem = (item) => {
    axios
      .delete(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist/${item}`)
     setTimeout(() => {
      getData()
     }, 500);
  };
  
  return (
    <div>
      <Header />

      <div className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTitle}>
            <h3>SIZIN WISHLIST</h3>
          </div>

          <div className={styles.productsContainerBottom}>
            {data &&
              data.map((item) => (
                <div className={styles.productsCards}>
                  <img src={item.thumbnail} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.price} $</p>
                  <div className={styles.cardsButton}>
                    <button style={{display:"flex" , alignItems:"center" , gap: "10px"}} onClick={() => deleteItem(item.id)}>DELETE <MdDelete /></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
