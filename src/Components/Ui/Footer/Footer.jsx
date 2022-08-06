import React from "react";
import { useLocation } from "react-router-dom";
import RectangleImageContainer from "../../RectangleImageContainer/RectangleImageContainer";

import logoUnpad from "../../../Assets/Logo/logo-unpad.svg";
import logoBem from "../../../Assets/Logo/logo-bem.svg";
import logoEkspad from "../../../Assets/Logo/logo-ekspad.svg";
import logoKabinet from "../../../Assets/Logo/logo-kabinet.svg";

import InstaIcon from "../../../Assets/Icons/instagram.svg?component";
import TwitterIcon from "../../../Assets/Icons/twitter.svg?component";
import LineIcon from "../../../Assets/Icons/line.svg?component";
import NetIcon from "../../../Assets/Icons/net.svg?component";
import YtIcon from "../../../Assets/Icons/yt.svg?component";
import LinkedIcon from "../../../Assets/Icons/linked.svg?component";
import MailIcon from "../../../Assets/Icons/mail.svg?component";

const Footer = () => {
  const location = useLocation();

  const insideMarketPlace = location.pathname.includes("/marketplace");

  return (
    <div
      className={
        (insideMarketPlace ? "bg-blue-dark text-white " : "bg-cream-dark ") +
        "flex flex-col items-center py-8 gap-8 text-sm"
      }
    >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start w-4/5">
        <div className="flex flex-col sm:flex-row font-bold sm:items-start items-center justify-between text-center lg:text-start w-full">
          <div className="mb-4">
            <h1 className="text-center sm:text-start text-white py-2 ">
              Tentang Kami:
            </h1>
            <ul className="[&>*]:text-center sm:[&>*]:text-left">
              <li>BEM Kema Unpad</li>
              <li>Ekspedisi Padjadjaran</li>
            </ul>
          </div>
          <div className="flex flex-col max-w-full gap-4">
            <div className="flex max-w-[240px] flex-row justify-between items-center">
              <div className="flex-1">
                <RectangleImageContainer size="60px" image={logoUnpad} />
              </div>
              <div className="flex-1">
                <RectangleImageContainer size="60px" image={logoBem} />
              </div>
              <div className="flex-1">
                <RectangleImageContainer size="60px" image={logoEkspad} />
              </div>
              <div className="flex-1">
                <RectangleImageContainer size="60px" image={logoKabinet} />
              </div>
            </div>
            <div className="text-center sm:text-left text-white font-bold">
              <h3>Bem Kema Unpad 2022</h3>
              <p>Kabinet Garis Depan</p>
            </div>
            <div
              className={
                (insideMarketPlace ? "[&>a>*]:fill-white " : "") +
                "hidden sm:flex gap-2"
              }
            >
              <a href="/">
                <InstaIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <LineIcon />
              </a>
              <a href="/">
                <NetIcon />
              </a>
              <a href="/">
                <YtIcon />
              </a>
              <a href="/">
                <LinkedIcon />
              </a>
              <a href="/">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[80%] lg:w-4/5 justify-center lg:justify-start">
        <div className="flex flex-col justify-start text-white">
          <p className="text-center lg:text-start ">
            Copyright © Desa Pulau Buaya 2022
          </p>
          <address className="text-center lg:text-start flex flex-col lg:flex-row lg:gap-1">
            <p className="lg:after:content-[',']">Kecamatan Alor Barat Laut</p>
            <p className="lg:after:content-[',']">Kabupaten Alor</p>
            <p>Nusa Tenggara Timur</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
