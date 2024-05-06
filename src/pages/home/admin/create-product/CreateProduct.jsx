import React from "react";
import Products from "../../../../components/products/Products";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const CreateProduct = () => {
  return (
    <div>
      <div className="line">
        <NavLink to={"/"}>home</NavLink>
        <MdKeyboardArrowRight />

        <p>create</p>
      </div>
      <Products />
    </div>
  );
};

export default CreateProduct;
