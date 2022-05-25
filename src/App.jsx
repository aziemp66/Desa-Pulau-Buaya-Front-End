import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Ui/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="">
        <Navbar toggleShow={setShow} show={show} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
