import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-reveal";

import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineHistory,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { GiVillage } from "react-icons/gi";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Navbar = ({ toggleShow, show }) => {
  const location = useLocation();
  return (
    <div
      className={`flex flex-row ${
        location.pathname === "/" ? "lg:absolute" : ""
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`flex flex-row w-screen h-20 py-5 px-8 ${
            location.pathname === "/"
              ? "bg-transparent"
              : "bg-slate-100 border-b-2"
          }`}
        >
          <div
            className="flex justify-center items-center"
            onClick={() => toggleShow((prev) => !prev)}
          >
            <IoMdArrowDropupCircle
              className={`w-10 h-10 text-blue-500 hover:text-blue-600 active:text-blue-700 cursor-pointer ${
                show ? "lg:-rotate-90" : "rotate-180 lg:rotate-90"
              } transition-all`}
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-blue-500 text-xl font-inter font-bold">
              Desa Pulau Buaya
            </h1>
          </div>
        </div>
        <div className="lg:hidden">
          <Fade big when={show}>
            <div
              onClick={() => toggleShow((prev) => !prev)}
              className={`w-screen bg-slate-100 absolute`}
            >
              <ul className="flex flex-col cursor-pointer ">
                <Link to={"/"}>
                  <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                    <AiFillHome />
                    <span>Home</span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                    <AiFillInfoCircle />
                    <span>Tentang</span>
                  </li>
                </Link>
                <Link to={"/history"}>
                  <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                    <AiOutlineHistory />
                    <span>Sejarah</span>
                  </li>
                </Link>
                <Link to={"/head-info"}>
                  <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                    <GiVillage />
                    <span>Info Kepala Desa</span>
                  </li>
                </Link>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
