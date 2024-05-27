import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { useFormik } from "formik";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (item) => {
    axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Basket/${item}`);
    setTimeout(() => {
      getData();
    }, 500);
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      email: "",
    },
    onSubmit: (values) => {
      axios.post(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`, values);
      setTimeout(() => {
        getData();
      }, 500);
    },
  });

  return (
    <div>
      <Header />

      <div className={styles.Dashboard}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardContainerTitle}>
            <h3>DASHBOARD</h3>
            <form
              onSubmit={formik.handleSubmit}
              style={{ display: "flex", flexDirection: "column" ,}}
            >
              <div className={styles.inputDashboard}>
                <label htmlFor="">img url :</label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="text" placeholder="url"
                  onChange={formik.handleChange}
                  value={formik.values.thumbnail}
                />
              </div>
              <div className={styles.inputDashboard}>
                <label htmlFor="">basliq :</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                 placeholder="mehsulun adi"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>
              <div className={styles.inputDashboard}>
                <label htmlFor="">qiymet :</label>
                <input
                  id="price"
                  name="price"
                  type="text" placeholder="mehsulun qiymeti"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className={styles.dashboardContainerBottom}>
            {data &&
              data.map((item) => (
                <div className={styles.dashboardCards}>
                  <img src={item.thumbnail} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.price} $</p>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={() => deleteItem(item.id)}
                  >
                    DELETE <MdDelete />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
