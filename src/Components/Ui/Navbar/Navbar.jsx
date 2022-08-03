import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-reveal";

import { AiFillHome, AiFillInfoCircle, AiOutlineHistory } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GiVillage, GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggleShow, show }) => {
  const location = useLocation();
  const insideMarketPlace = location.pathname.includes("/marketplace");

  return (
    <div
      className={`flex sticky z-10 top-0 flex-row ${
        location.pathname === "/" && "lg:bg-transparent"
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`flex flex-row w-screen h-[4.5rem] py-5 px-8 ${
            !insideMarketPlace
              ? "bg-cream-light lg:bg-transparent lg:absolute "
              : "bg-blue-dark text-white border-b-2"
          }`}
        >
          <div
            className={`flex justify-center items-center`}
            onClick={() => toggleShow((prev) => !prev)}
          >
            <BsThreeDots
              className={`w-10 h-10 cursor-pointer lg:text-white absolute top-5 left-10 transition-all duration-300 ease-in-out ${
                show && "lg:hidden"
              }`}
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-xl lg:text-white font-noto-sans font-bold">
              Desa Pulau Buaya
            </h1>
          </div>
        </div>
        <div className="lg:hidden bg-cream-light">
          <Fade big when={show}>
            <div
              onClick={() => toggleShow((prev) => !prev)}
              className={`w-screen bg-cream-light absolute`}
            >
              <ul className="flex flex-col cursor-pointer ">
                <Link to={"/"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 ">
                    <AiFillHome />
                    <span>Home</span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 ">
                    <AiFillInfoCircle />
                    <span>Tentang</span>
                  </li>
                </Link>
                <Link to={"/history"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 ">
                    <AiOutlineHistory />
                    <span>Sejarah</span>
                  </li>
                </Link>
                <Link to={"/head-info"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 ">
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
