import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-about.jpg')] bg-no-repeat bg-center bg-cover relative w-screen h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-center text-xl lg:text-6xl lg:w-1/2 leading-20 font-noto-sans font-bold">
            Profil Desa Pulau Buaya
          </h1>
        </div>
      </div>
      <div className="w-4/5 lg:w-1/2 mx-auto py-12 lg:py-28 ">
        <article className="bg-cream-light flex flex-col justify-center items-center gap-4 lg:gap-8 text-sm lg:text-base">
          <p className="bg-inherit">
            Pulau Buaya merupakan salah satu desa yang ada di kecamatan Alor
            Barat Laut, kabupaten Alor, provinsi Nusa Tenggara Timur, Indonesia.
            Desa ini merupakan satu dari 19 desa dan kelurahan yang berada di
            kecamatan Alor Barat Laut. Desa ini memiliki kode pos 85851.
          </p>
          <p>
            Desa ini memiliki jumlah penduduknya sebagian besar bersuku daerah
            Alor. Sebagian besar penduduknya bermata pencaharian petani. Hasil
            pertanian utama di desa ini ialah kopi, kakao, kelapa, jagung dan
            lain-lain.
          </p>
        </article>
        <ul className="my-8 font-bold flex flex-col justify-center items-center gap-4 w-full lg:w-1/3 mx-auto">
          <Link
            className="py-4 w-full rounded-full text-center bg-blue-dark hover:bg-blue-dark-bold text-white transition duration-300"
            to="/vision-mission"
          >
            Visi Dan Misi
          </Link>
          <Link
            className="py-4 w-full rounded-full text-center bg-blue-dark hover:bg-blue-dark-bold text-white transition duration-300"
            to="/potential"
          >
            Potensi Desa
          </Link>
          <Link
            className="py-4 w-full rounded-full text-center bg-blue-dark hover:bg-blue-dark-bold text-white transition duration-300"
            to="/officials"
          >
            Profil Aparatur
          </Link>
          <Link
            className="py-4 w-full rounded-full text-center bg-blue-dark hover:bg-blue-dark-bold text-white transition duration-300"
            to="/map"
          >
            Peta Desa
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default About;
