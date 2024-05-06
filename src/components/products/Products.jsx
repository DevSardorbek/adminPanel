import React, { useEffect, useState } from "react";
import axios from "../api/Api";
import Loading from "../loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });

    return () => AOS.refresh();
  }, []);

  const handleDeleteUser = (id) => {
    if (window.confirm("Siz ishonchingizga aminmisiz?")) {
      setLoading(true);
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          console.log(res);
          setData(data.filter((item) => item.id !== id));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  };

  const products = data?.map((e) => (
    <div key={e.id} className="card" data-aos="flip-left">
      <img src={e.photo} alt="" />
      <h2>{e.title}</h2>
      <h3>{e.description}</h3>
      <p>${e.price}</p>
      <button onClick={() => handleDeleteUser(e.id)}>O'chirish</button>
    </div>
  ));

  return (
    <div>
      {loading ? <Loading /> : <div className="wrapper">{products}</div>}
    </div>
  );
};

export default Products;
