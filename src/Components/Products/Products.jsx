import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const getData = () => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCard = (item) => {
    axios.post(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`, item);
    alert("baskete elave olundu");
  };

  const addToWish = async (item) => {
    try {
      const response = await axios.get(
        "https://664c587c35bbda10987ff83d.mockapi.io/Wishlist"
      );
      const db = response.data;

      const alreadyWishList = db.some((x) => x.productId === item.productId);

      if (!alreadyWishList) {
        await axios.post(
          "https://664c587c35bbda10987ff83d.mockapi.io/Wishlist",
          item
        );
        alert("Mehsul wishliste elave olunmusdur!");
      } else {
        alert(" Əmeliyyat bas tutmadi. Mehsul wishliste movcuddur!");
      }
    } catch (error) {
      alert("", error);
    }
  };

  const sortedDataAZ = () => {
    const sorteddata = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sorteddata);
  };
  const sortedDataZA = () => {
    const sorteddata = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sorteddata);
  };

  const sortedDataPriceAZ = () => {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedData);
  };
  const sortedDataPriceZA = () => {
    const sortedData = [...data].sort((a, b) => b.price - a.price);
    setData(sortedData);
  };

  const handleSearchChange = (item) => {
    setSearchTerm(item.target.value)
}

const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div>
      <div className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTitle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="text" placeholder="AXTAR..." 
              onChange={handleSearchChange}
              
              
              />
              <label htmlFor="">
                <IoSearchSharp />
              </label>
            </div>
            <h3>FEATURED PRODUCTS</h3>
            <div className={styles.search}>
              <div style={{ display: "flex", gap: "3px" }}>
                <button onClick={sortedDataAZ}>
                  <FaSortAlphaDown />
                  A-Z
                </button>
                <button onClick={sortedDataZA}>
                  <FaSortAlphaDownAlt />
                  Z-A
                </button>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <button onClick={sortedDataPriceAZ}>
                  <IoPricetagsSharp />
                  Qiymeti Artan
                </button>
                <button onClick={sortedDataPriceZA}>
                  <IoPricetagsSharp />
                  Qiymeti Azalan{" "}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.productsContainerBottom}>
            {data &&
              filteredData.map((item) => (
                <div className={styles.productsCards}>
                  <img src={item.thumbnail} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.price} $</p>
                  <div className={styles.cardsButton}>
                    <button onClick={() => addToCard(item)}>ADD TO CARD</button>
                    <CiHeart
                      className={styles.wish}
                      onClick={() => addToWish(item)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
