import React from "react";

import logoUnpad from "../../../Assets/Logo/logo-unpad.svg";
import logoBem from "../../../Assets/Logo/logo-bem.svg";
import logoEkspad from "../../../Assets/Logo/logo-ekspad.svg";
import logoKabinet from "../../../Assets/Logo/logo-kabinet.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-cream-dark py-6 gap-8">
      <div className="flex flex-col lg:flex-row justify-between items-center w-4/5">
        <div className="font-bold">
          <h1 className="text-white py-2">Tentang Kami:</h1>
          <ul className="flex flex-col gap-1">
            <li>BEM Kema Unpad</li>
            <li>Ekspedisi Padjadjaran</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
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
        </div>
      </div>
      <div className="flex flex-col  items-center text-white">
        <p>Copyright © Desa Pulau Buaya 2022</p>
        <address className="text-center">
          Kecamatan Alor Barat Laut,
          <br />
          Kabupaten Alor, Nusa Tenggara Timur
        </address>
      </div>
    </div>
  );
};

export default Footer;
