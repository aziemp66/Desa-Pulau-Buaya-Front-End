import React from "react";

import mascotBoth from "../../Assets/Icons/mascot-both.svg";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('./src/Assets/bg-home.jpg')] bg-no-repeat bg-center bg-cover relative w-screen h-[35rem] ">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center items-center flex-col">
          <img src={mascotBoth} alt="mascot" />
          <h1 className="text-white text-[60px] font-noto-sans font-bold">
            Desa Pulau Buaya
          </h1>
          <p className="text-white text-center">
            Kecamatan Alor Barat Laut, Kabupaten Alor,
            <br /> Nusa Tenggara Timur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
