import React from "react";
import Header from "../../../components/header/Header";
import "../../../css/admin.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <Header />
      <div className="sidebar">
        <NavLink to={"/admin/create-product"}>Create-Product</NavLink>
        <NavLink to={"/admin/manage-product"}>Manage-Product</NavLink>
      </div>
      <div style={{ paddingLeft: "320px", paddingTop: "84px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
