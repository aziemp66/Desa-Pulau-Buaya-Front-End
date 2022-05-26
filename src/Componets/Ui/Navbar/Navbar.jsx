import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineHistory,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { GiVillage } from "react-icons/gi";

const Navbar = ({ toggleShow, show }) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col">
        <div className="flex flex-row w-screen h-20 bg-slate-100 py-5 px-2 border-b-2">
          <div
            className="flex justify-center items-center"
            onClick={() => toggleShow((prev) => !prev)}
          >
            {show ? (
              <AiOutlineArrowUp className="w-10 h-10 text-blue-500 hover:text-blue-600 active:text-blue-700 cursor-pointer lg:-rotate-90 transition-all duration-500" />
            ) : (
              <div className="w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer group">
                <div className="bg-blue-500 h-1 w-4/5 rounded-lg group-hover:bg-blue-600  group-active:bg-blue-700"></div>
                <div className="bg-blue-500 h-1 w-4/5 rounded-lg group-hover:bg-blue-600 group-active:bg-blue-700"></div>
                <div className="bg-blue-500 h-1 w-4/5 rounded-lg group-hover:bg-blue-600 group-active:bg-blue-700"></div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-blue-500 text-xl font-inter font-bold">
              Desa Pulau Buaya
            </h1>
          </div>
        </div>
        <div className="lg:hidden">
          <Fade big when={show}>
            <div className={`w-screen bg-slate-100 absolute`}>
              <ul className="flex flex-col cursor-pointer ">
                <li
                  onClick={() => toggleShow((prev) => !prev)}
                  className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300"
                >
                  <AiFillHome />
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                  <AiFillInfoCircle />
                  <Link to={"/about"}>Tentang</Link>
                </li>
                <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                  <AiOutlineHistory />
                  <Link to={"/history"}>Sejarah</Link>
                </li>
                <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
                  <GiVillage />
                  <Link to={"/village-head"}>info Kepala Desa</Link>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
