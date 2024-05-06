import React, { useState } from "react";
import Products from "../../../../components/products/Products";
import "./manage.css";
import axios from "../../../../components/api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initislState = {
  title: "",
  description: "",
  price: "",
  url: "",
};
const ManageProduct = () => {
  const [newProduct, setNewProduct] = useState(initislState);

  const handleAddProduct = () => {
    console.log(newProduct);
    axios
      .post("/products", newProduct)
      .then((res) => {
        console.log(res);
        toast.success("Wow so easy!");
        setNewProduct(initislState);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div className="manage">
      <form className="form_section">
        <input
          required
          type="text"
          placeholder="Title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          required
          placeholder="Description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ManageProduct;
