import React from "react";

import group1Image1 from "../../Assets/KainTenun/car1_1.jpg";
import group1Image2 from "../../Assets/KainTenun/car1_2.jpg";
import group1Image3 from "../../Assets/KainTenun/car1_3.jpg";
import group1Image4 from "../../Assets/KainTenun/car1_4.jpg";
import group1Image5 from "../../Assets/KainTenun/car1_5.jpg";
import group1Image6 from "../../Assets/KainTenun/car1_6.jpg";
import group1Image7 from "../../Assets/KainTenun/car1_7.jpg";
import group1Image8 from "../../Assets/KainTenun/car1_8.jpg";
import group1Image9 from "../../Assets/KainTenun/car1_9.jpg";
import group1Image10 from "../../Assets/KainTenun/car1_10.jpg";
import group2Image1 from "../../Assets/KainTenun/car2_1.jpg";
import group2Image2 from "../../Assets/KainTenun/car2_2.jpg";

const group1 = [
  group1Image1,
  group1Image2,
  group1Image3,
  group1Image4,
  group1Image5,
  group1Image6,
  group1Image7,
  group1Image8,
  group1Image9,
  group1Image10,
];
const group2 = [group2Image1, group2Image2];

const Textile = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-kaintenun.jpg')] bg-no-repeat bg-center bg-cover relative w-full h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-center text-xl lg:text-6xl lg:w-1/2 leading-20 font-noto-sans font-bold">
            Potret Kain Tenun Khas Pulau Buaya
          </h1>
          <p className="text-white text-center">
            Kumpulan Foto Kain Tenun Alor
          </p>
        </div>
      </div>
      <div className="mx-auto lg:w-4/5 p-12 lg:py-24 h-full">
        <ul className="grid grid-cols-2 grid-rows-2 gap-10 mx-auto">
          {group1.map((image, index) => (
            <li
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
              key={index}
              className="w-full h-full mx-auto"
            >
              <img className="w-full h-full" src={image} alt="carousel" />
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-2 grid-rows-1 gap-10 mt-12 mx-auto">
          {group2.map((image, index) => (
            <li
              data-aos="fade-right"
              key={index}
              className="w-full h-full mx-auto"
            >
              <img className="w-full h-full" src={image} alt="carousel" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Textile;
2;
