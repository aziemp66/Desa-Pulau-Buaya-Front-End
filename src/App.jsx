import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import Footer from "./Components/Ui/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import History from "./Pages/History/History";
import HeadInfo from "./Pages/HeadInfo/HeadInfo";
import Marketplace from "./Pages/Marketplace/Marketplace";
import MarketplaceLogin from "./Pages/Marketplace/MarketplaceLogin/MarketplaceLogin";
import MarketplaceSignIn from "./Pages/Marketplace/MarketplaceSignIn/MarketplaceSignIn";
import MarketplaceProfile from "./Pages/Marketplace/MarketplaceProfile/MarketplaceProfile";
import ProductView from "./Pages/Marketplace/ProductView/ProductView";
import EditProduct from "./Pages/Marketplace/EditProduct/EditProduct";
import AddProduct from "./Pages/Marketplace/AddProduct/AddProduct";
import Cart from "./Pages/Marketplace/Cart/Cart";
import Order from "./Pages/Marketplace/Order/Order";
import Textile from "./Pages/Textile/Textile";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex">
      <Sidebar toggleShow={setShow} show={show} />
      <div
        className={`transition-all duration-500 ease-in-out ${
          !show && "lg:-translate-x-80"
        }`}
      >
        <Navbar toggleShow={setShow} show={show} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/head-info" element={<HeadInfo />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/login" element={<MarketplaceLogin />} />
          <Route path="/marketplace/signin" element={<MarketplaceSignIn />} />
          <Route path="/marketplace/profile" element={<MarketplaceProfile />} />
          <Route path="/marketplace/view" element={<ProductView />} />
          <Route path="/marketplace/cart" element={<Cart />} />
          <Route path="/marketplace/order" element={<Order />} />
          <Route path="/marketplace/product" element={<EditProduct />} />
          <Route path="/marketplace/product/add" element={<AddProduct />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
1;
