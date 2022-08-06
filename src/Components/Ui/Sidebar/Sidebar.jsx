import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import pointsBlackVertical from "../../../Assets/Icons/points-black-vertical.svg";
import closeBlack from "../../../Assets/Icons/close-black.svg";

import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineHistory,
  AiOutlineClose,
  AiFillShop,
} from "react-icons/ai";
import { BsThreeDotsVertical, BsFillMapFill } from "react-icons/bs";
import { GiVillage, GiSewingNeedle } from "react-icons/gi";
import { ImStatsBars, ImOffice } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import { SiPowerbi, SiFuturelearn } from "react-icons/si";

const Sidebar = ({ show, toggleShow }) => {
  const [showProfileSub, setShowProfileSub] = useState(false);
  const location = useLocation();
  const insideMarketPlace = location.pathname.includes("/marketplace");

  const toggle = () => {
    toggleShow((prev) => !prev);
  };

  return (
    <div
      className={`hidden lg:block lg:sticky lg:top-0 ${
        !insideMarketPlace ? "bg-cream-light" : "bg-blue-dark"
      } h-screen gap-32 ${
        !show && "lg:-translate-x-full"
      } transition-all duration-500 ease-in-out`}
    >
      {!insideMarketPlace ? (
        <>
          <div className="w-80 py-[21px] border-b-2 border-slate-200 px-6 border-r-2 ">
            <div className="flex justify-between items-center">
              <div
                className={`font-noto-sans font-bold text-xl text-center flex gap-2`}
              >
                <BsThreeDotsVertical className={`text-2xl`} />
                <span>Menu</span>
              </div>
              <div>
                <AiOutlineClose
                  className="text-2xl cursor-pointer font-black"
                  onClick={toggle}
                />
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col cursor-pointer ">
              <Link to={"/"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <AiFillHome />
                  <span>Home</span>
                </li>
              </Link>
              <Link to={"/about"} className="group flex flex-col relative">
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light w-full hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-between px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <div className="flex gap-3 justify-center items-center">
                    <AiFillInfoCircle />
                    <span>Profil Desa</span>
                  </div>
                  <div>
                    <IoIosArrowUp
                      onClick={() => setShowProfileSub((prev) => !prev)}
                      className={`group-hover:rotate-180 transition duration-300 ease-in-out w-7 h-7`}
                    />
                  </div>
                </li>
                <div className="scale-0 h-0 group-hover:h-[112px] -translate-x-full group-hover:scale-100 group-hover:translate-x-0 transition-all duration-500 [&>*]:mt-0">
                  <Link to={"/potential"}>
                    <li
                      className={`${
                        !insideMarketPlace ? "text-slate-600" : "text-white"
                      } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 transition duration-300`}
                    >
                      <SiPowerbi />
                      <span>Potensi Desa</span>
                    </li>
                  </Link>
                  <Link to={"/map"}>
                    <li
                      className={`${
                        !insideMarketPlace ? "text-slate-600" : "text-white"
                      } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 transition duration-300`}
                    >
                      <BsFillMapFill />
                      <span>Peta Desa</span>
                    </li>
                  </Link>
                  <Link to={"/officials"}>
                    <li
                      className={`${
                        !insideMarketPlace ? "text-slate-600" : "text-white"
                      } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-1 gap-3 border-b-2 border-slate-300 transition duration-300`}
                    >
                      <ImOffice />
                      <span>Profil Aparatur</span>
                    </li>
                  </Link>
                </div>
              </Link>
              <Link to={"/history"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <AiOutlineHistory />
                  <span>Sejarah Desa</span>
                </li>
              </Link>
              <Link to={"/textile"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <GiSewingNeedle />
                  <span>Potret Kain tenun</span>
                </li>
              </Link>
              <Link to={"/head-info"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <GiVillage />
                  <span>Info Kepala Desa</span>
                </li>
              </Link>
              <Link to={"/marketplace"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <AiFillShop />
                  <span>Marketplace</span>
                </li>
              </Link>
              <Link to={"/marketplace/statistics"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <ImStatsBars />
                  <span>Data Statistik</span>
                </li>
              </Link>
            </ul>
          </div>
        </>
      ) : (
        <div className="">
          <div>
            <ul className="flex flex-col cursor-pointer ">
              <Link to={"/about"} className="group flex flex-col relative">
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light w-full hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-between px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <div className="flex gap-3 justify-center items-center">
                    <AiFillInfoCircle />
                    <span>Profil Desa</span>
                  </div>
                  <div>
                    <IoIosArrowUp
                      onClick={() => setShowProfileSub((prev) => !prev)}
                      className={`group-hover:rotate-180 transition duration-300 ease-in-out w-7 h-7`}
                    />
                  </div>
                </li>
              </Link>
              <Link to={"/textile"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <GiSewingNeedle />
                  <span>Potret Kain tenun</span>
                </li>
              </Link>
              <Link to={"/head-info"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <GiVillage />
                  <span>Info Kepala Desa</span>
                </li>
              </Link>
              <Link to={"/marketplace"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <AiFillShop />
                  <span>Marketplace</span>
                </li>
              </Link>
              <Link to={"/marketplace/statistics"}>
                <li
                  className={`${
                    insideMarketPlace && "text-white"
                  } hover:bg-blue-light hover:text-cream-light font-noto-sans font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 transition duration-300`}
                >
                  <ImStatsBars />
                  <span>Data Statistik</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
