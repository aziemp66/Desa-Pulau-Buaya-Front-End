import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import History from "./Pages/History/History";
import HeadInfo from "./Pages/HeadInfo/HeadInfo";
import Marketplace from "./Pages/Marketplace/Marketplace";
import ProductView from "./Pages/Marketplace/ProductView/ProductView";

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
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/view" element={<ProductView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
