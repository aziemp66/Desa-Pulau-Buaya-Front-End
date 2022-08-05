import React from "react";

import officialsHierarchy from "../../../Assets/officials.png";

const Officials = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-about.jpg')] bg-no-repeat bg-center bg-cover relative w-screen h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-center text-xl lg:text-6xl lg:w-1/2 leading-20 font-noto-sans font-bold">
            Profil Desa Pulau Buaya
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto py-12 lg:py-28">
        <img className="w-full h-auto" src={officialsHierarchy} alt="" />
      </div>
    </div>
  );
};

export default Officials;
