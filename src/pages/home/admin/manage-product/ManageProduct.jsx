import React, { useState } from "react";
import Products from "../../../../components/products/Products";
import "./manage.css";

const ManageProduct = () => {
  // Yangi mahsulot ma'lumotlarini saqlash uchun holatlar
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    url: "",
  });

  // Yangi mahsulotni saqlash uchun funktsiya
  const handleAddProduct = () => {
    // Yangi mahsulot ma'lumotlarini yuborish
    console.log(newProduct);
    // Bu yerdagi log-larni serverga yuborish uchun API-ni chaqirish mumkin
  };

  // Inputlardagi qiymatlarni yangilash uchun funktsiya
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Yangi mahsulot ma'lumotlarini yangilash
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div className="manage">
      <form className="form_section">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="url"
          value={newProduct.url}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
      <Products />
    </div>
  );
};

export default ManageProduct;
