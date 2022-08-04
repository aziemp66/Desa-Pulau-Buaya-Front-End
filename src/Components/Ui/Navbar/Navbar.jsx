import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiFillHome, AiFillInfoCircle, AiOutlineHistory } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GiVillage, GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggleShow, show }) => {
  const location = useLocation();
  const [scrollDown, setScrollDown] = useState(false);

  const insideMarketPlace = location.pathname.includes("/marketplace");

  const changeColor = () =>
    window.scrollY > 100 ? setScrollDown(true) : setScrollDown(false);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`flex sticky z-10 top-0 flex-row bg-white`}>
      <div className="flex flex-col">
        <div
          className={`flex flex-row w-screen h-[4.5rem] py-5 px-8 ${
            !insideMarketPlace
              ? `bg-cream-light ${
                  !scrollDown ? "lg:bg-transparent" : "lg:bg-grayish-blue"
                } lg:absolute `
              : "bg-blue-dark border-b-2"
          }`}
        >
          <div className={`flex justify-center items-center`}>
            <BsThreeDots
              className={`w-10 h-10 cursor-pointer text-blue-dark absolute top-5 left-10 transition-all duration-300 ease-in-out ${
                show && "lg:hidden"
              }`}
              onClick={() => toggleShow((prev) => !prev)}
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <h1 className={`text-xl text-blue-dark font-noto-sans font-bold`}>
              Desa Pulau Buaya
            </h1>
          </div>
        </div>
        {show && (
          <div className="lg:hidden bg-cream-light">
            <div
              onClick={() => toggleShow((prev) => !prev)}
              className={`w-screen bg-cream-light absolute`}
            >
              <ul className="flex flex-col cursor-pointer text-blue-dark ">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
