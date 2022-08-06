import React, { useState } from "react";
import "./Utilities/Animation/Animation";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import Footer from "./Components/Ui/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Officials from "./Pages/About/Officials/Officials";
import History from "./Pages/History/History";
import ChiefInfo from "./Pages/ChiefInfo/ChiefInfo";
import Marketplace from "./Pages/Marketplace/Marketplace";
import MarketplaceLogin from "./Pages/Marketplace/MarketplaceLogin/MarketplaceLogin";
import MarketplaceSignIn from "./Pages/Marketplace/MarketplaceSignIn/MarketplaceSignIn";
import MarketplaceProfile from "./Pages/Marketplace/MarketplaceProfile/MarketplaceProfile";
import MarketplaceUser from "./Pages/Marketplace/User/User";
import MarketplaceAdmin from "./Pages/Marketplace/Admin/Admin";
import ProductView from "./Pages/Marketplace/ProductView/ProductView";
import ProductList from "./Pages/Marketplace/ProductList/ProductList";
import ProductForm from "./Pages/Marketplace/ProductForm/ProductForm";
import Cart from "./Pages/Marketplace/Cart/Cart";
import Checkout from "./Pages/Marketplace/Checkout/Checkout";
import Order from "./Pages/Marketplace/Order/Order";
import OrderHistory from "./Pages/Marketplace/OrderHistory/OrderHistory";
import Statistics from "./Pages/Marketplace/Statistics/Statistics";
import Textile from "./Pages/Textile/Textile";
import Map from "./Pages/About/Map/Map";
import Potential from "./Pages/About/Potential/Potential";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="transition-all duration-500 ease-in-out flex flex-row items-start justify-start">
      {show && <Sidebar toggleShow={setShow} show={show} />}
      <div className="w-full">
        <Navbar toggleShow={setShow} show={show} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/officials" element={<Officials />} />
          <Route path="/map" element={<Map />} />
          <Route path="/potential" element={<Potential />} />
          <Route path="/history" element={<History />} />
          <Route path="/head-info" element={<ChiefInfo />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/login" element={<MarketplaceLogin />} />
          <Route path="/marketplace/signup" element={<MarketplaceSignIn />} />
          <Route path="/marketplace/profile" element={<MarketplaceProfile />} />
          <Route path="/marketplace/user" element={<MarketplaceUser />} />
          <Route path="/marketplace/admin" element={<MarketplaceAdmin />} />
          <Route path="/marketplace/view" element={<ProductView />} />
          <Route path="/marketplace/cart" element={<Cart />} />
          <Route path="/marketplace/cart/checkout" element={<Checkout />} />
          <Route path="/marketplace/order" element={<Order />} />
          <Route path="/marketplace/history" element={<OrderHistory />} />
          <Route path="/marketplace/product" element={<ProductList />} />
          <Route
            path="/marketplace/product/add"
            element={<ProductForm title="Tambah Produk" />}
          />
          <Route
            path="/marketplace/product/edit"
            element={<ProductForm title="Edit Produk" />}
          />
          <Route path="/marketplace/statistics" element={<Statistics />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
1;
