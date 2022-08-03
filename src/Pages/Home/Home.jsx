import React from "react";

import mascotBoth from "../../Assets/Icons/mascot-both.svg";

const Home = () => {
  return (
    <div>
      <div className="bg-[image:url('./src/Assets/bg-home.jpg')]">
        <img src={mascotBoth} alt="mascot" />
        <h1>Desa Pulau Buaya</h1>
        <p>Kecamatan Alor Barat Laut, Kabupaten Alor, Nusa Tenggara Timur</p>
      </div>
    </div>
  );
};

export default Home;
