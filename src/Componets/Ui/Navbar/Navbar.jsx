import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import { AiFillHome, AiFillInfoCircle, AiOutlineHistory } from "react-icons/ai";
import { GiVillage } from "react-icons/gi";

const Navbar = (props) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row w-screen bg-slate-100 py-4 px-2">
          <div onClick={() => props.toggleShow((prev) => !prev)}>
            <div className=" w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer">
              <div className="bg-blue-500 h-1 w-4/5 rounded-lg"></div>
              <div className="bg-blue-500 h-1 w-4/5 rounded-lg"></div>
              <div className="bg-blue-500 h-1 w-4/5 rounded-lg"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-blue-500 text-2xl font-inter font-bold">
              Desa Pulau Buaya
            </h1>
          </div>
        </div>
        <div className="md:hidden md:absolute">
          <Fade big when={props.show}>
            <div className={`w-screen bg-slate-100 absolute`}>
              <ul className="flex flex-col cursor-pointer ">
                <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
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
