import React from "react";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`-translate-x-full absolute lg:flex-col bg-slate-100 h-screen gap-32 items-center ${
        show && "lg:translate-x-0 lg:relative"
      }  transition-all`}
    >
      <div className="w-80 py-[21px] border-b-2 px-6 flex justify-between items-center border-r-2">
        <h2 className="text-blue-500 font-inter font-bold text-3xl text-center ">
          Main Menu
        </h2>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Tentang</li>
          <li>Sejarah</li>
          <li>Info Kepala Desa</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
