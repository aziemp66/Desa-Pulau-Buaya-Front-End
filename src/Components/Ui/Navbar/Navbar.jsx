import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../../Assets/Icons/user.svg?component";
import BurgerIcon from "../../../Assets/Icons/burger.svg?component";
import CartIcon from "../../../Assets/Icons/cart.svg?component";

import {
  AiFillHome,
  AiFillShop,
  AiOutlineHistory,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BsThreeDots, BsFillMapFill } from "react-icons/bs";
import { GiSewingNeedle, GiVillage } from "react-icons/gi";
import { SiPowerbi } from "react-icons/si";
import { ImOffice, ImStatsBars } from "react-icons/im";

const Navbar = ({ toggleShow, show }) => {
  const location = useLocation();
  const [scrollDown, setScrollDown] = useState(false);

  const insideMarketPlace = location.pathname.includes("/marketplace");

  const changeColor = () =>
    window.scrollY > 100 ? setScrollDown(true) : setScrollDown(false);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`flex sticky z-10 top-0 flex-row bg-white`}>
      <div className="w-full flex flex-col">
        <div
          className={`flex flex-row w-full h-[4.5rem] py-5 px-8 ${
            !insideMarketPlace
              ? `bg-cream-light ${
                  !scrollDown ? "lg:bg-transparent" : "lg:bg-white-transparent"
                } lg:absolute `
              : "bg-blue-dark border-b-2"
          }`}
        >
          <div className={`w-full flex justify-center items-center`}>
            <div className="flex-none mr-4">
              {insideMarketPlace ? (
                <button
                  className={`flex items-center justify-center w-8 h-8 bg-white rounded-lg ${
                    show && "lg:hidden"
                  }`}
                  onClick={() => toggleShow((prev) => !prev)}
                >
                  <BurgerIcon />
                </button>
              ) : (
                <BsThreeDots
                  className={`w-10 h-10 cursor-pointer ${
                    !scrollDown
                      ? `${
                          !insideMarketPlace ? "text-blue-dark" : "text-white"
                        } lg:text-white`
                      : "text-blue-dark"
                  } ${show && "lg:hidden"}`}
                  onClick={() => toggleShow((prev) => !prev)}
                />
              )}
            </div>

            <h1
              className={`mr-4 flex-1 text-xl 
                ${!insideMarketPlace ? "text-blue-dark" : "text-white"}
              font-noto-sans font-bold`}
            >
              Desa Pulau Buaya
            </h1>
            {insideMarketPlace && (
              <div className="flex-none flex items-center justify-between">
                <Link
                  className="mr-4 flex items-center justify-center w-8 h-8 bg-white rounded-lg"
                  to="/marketplace/profile"
                >
                  <UserIcon />
                </Link>
                <Link
                  className="flex items-center justify-center w-8 h-8 bg-white rounded-lg"
                  to="/marketplace/cart"
                >
                  <CartIcon />
                </Link>
              </div>
            )}
          </div>
        </div>
        {show && (
          <div className="lg:hidden bg-cream-light text-blue-dark">
            <div
              onClick={() => toggleShow((prev) => !prev)}
              className={`w-full bg-cream-light absolute`}
            >
              <ul className="flex flex-col cursor-pointer ">
                <Link to={"/"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-y-2 border-slate-300 ">
                    <AiFillHome />
                    <span>Home</span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <AiFillInfoCircle />
                    <span>Profil Desa</span>
                  </li>
                </Link>
                <Link to={"/history"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <AiOutlineHistory />
                    <span>Sejarah</span>
                  </li>
                </Link>
                <Link to={"/textile"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <GiSewingNeedle />
                    <span>Potret Kain Tenun</span>
                  </li>
                </Link>
                <Link to={"/head-info"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <GiVillage />
                    <span>Info Kepala Desa</span>
                  </li>
                </Link>
                <Link to={"/marketplace"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <AiFillShop />
                    <span>Marketplace</span>
                  </li>
                </Link>
                <Link to={"/marketplace/statistics"}>
                  <li className="font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 ">
                    <ImStatsBars />
                    <span>Statistik</span>
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
