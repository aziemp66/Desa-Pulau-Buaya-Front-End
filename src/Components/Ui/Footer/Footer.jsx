import React from "react";

import logoUnpad from "../../../Assets/Logo/logo-unpad.svg";
import logoBem from "../../../Assets/Logo/logo-bem.svg";
import logoEkspad from "../../../Assets/Logo/logo-ekspad.svg";
import logoKabinet from "../../../Assets/Logo/logo-kabinet.svg";

import instaBlack from "../../../Assets/Icons/insta-black.svg";
import twitterBlack from "../../../Assets/Icons/twitter-black.svg";
import lineBlack from "../../../Assets/Icons/line-black.svg";
import netBlack from "../../../Assets/Icons/net-black.svg";
import ytBlack from "../../../Assets/Icons/yt-black.svg";
import linkedBlack from "../../../Assets/Icons/linked-black.svg";
import mailBlack from "../../../Assets/Icons/mail-black.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-cream-dark py-8 gap-8">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start w-4/5">
        <div className="flex flex-col font-bold justify-center text-center lg:text-start">
          <h1 className="text-center lg:text-start text-white py-2 ">
            Tentang Kami:
          </h1>
          <ul className="">
            <li>BEM Kema Unpad</li>
            <li>Ekspedisi Padjadjaran</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[1/2]">
          <div className="flex justify-between items-center">
            <img
              className="w-16 lg:w-20 h-auto"
              src={logoUnpad}
              alt="logo-unpad"
            />
            <img className="w-16 lg:w-20 h-auto" src={logoBem} alt="logo-bem" />
            <img
              className="w-16 lg:w-20 h-auto"
              src={logoEkspad}
              alt="logo-ekspad"
            />
            <img
              className="w-16 lg:w-20 h-auto"
              src={logoKabinet}
              alt="logo-kabinet"
            />
          </div>
          <div className="text-center text-white font-bold">
            <h3>Bem Kema Unpad 2022</h3>
            <p>Kabinet Garis Depan</p>
          </div>
          <div className="hidden lg:flex gap-2">
            <a href="/">
              <img src={instaBlack} alt="insta" />
            </a>
            <a href="/">
              <img src={twitterBlack} alt="twitter" />
            </a>
            <a href="/">
              <img src={lineBlack} alt="line" />
            </a>
            <a href="/">
              <img src={netBlack} alt="net" />
            </a>
            <a href="/">
              <img src={ytBlack} alt="yt" />
            </a>
            <a href="/">
              <img src={linkedBlack} alt="linked" />
            </a>
            <a href="/">
              <img src={mailBlack} alt="mail" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-[80%] lg:w-4/5 justify-center lg:justify-start">
        <div className="flex flex-col justify-start  text-white">
          <p className="text-center lg:text-start ">
            Copyright © Desa Pulau Buaya 2022
          </p>
          <address className="text-center lg:text-start flex flex-col lg:flex-row">
            <p>Kecamatan Alor Barat Laut,&nbsp;</p>
            <p>Kabupaten Alor,&nbsp;</p>
            <p>Nusa Tenggara Timur</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
