import React, { useEffect, useState } from "react";
import axios from "../api/Api";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          console.log(res);
          setData(data.filter((item) => item.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  const products = data?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.url} alt="" />
      <h2>{e.title}</h2>
      <h3>{e.desctiption}</h3>
      <p>${e.price}</p>
      <button onClick={() => handleDeleteUser(e.id)}>Delete</button>
    </div>
  ));
  return (
    <div>
      <div className="wrapper">{products}</div>
    </div>
  );
};

export default Products;
