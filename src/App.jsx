import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className=" flex flex-1 ">
      <Sidebar toggleShow={setShow} show={show} />
      <div>
        <Navbar toggleShow={setShow} show={show} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/history" element={<div>History</div>} />
          <Route path="/head-info" element={<div>Head Info</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
