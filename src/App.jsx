import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Ui/Navbar/Navbar";
import Sidebar from "./Componets/Ui/Sidebar/Sidebar";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
