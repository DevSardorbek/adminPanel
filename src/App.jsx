import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/home/admin/Admin";
import ManageProduct from "./pages/home/admin/manage-product/ManageProduct";
import CreateProduct from "./pages/home/admin/create-product/CreateProduct";
import Dashboad from "./pages/home/admin/dashboad/Dashboad";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboad />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/Login" element={<Login />} />{" "}
// <Route path="/product/:id" element={<SingleRoute />} />
// <Route path="/" element={<Auth />}>
//   <Route path="admin" element={<Admin />}></Route>
// </Route>
// <Route path="*" element={<NotFound />} />
// </Routes>
// <ToastContainer />
// </>
// );
// }
