import React from "react";

const Map = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-about.jpg')] bg-no-repeat bg-center bg-cover relative w-full h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-center text-xl lg:text-6xl lg:w-1/2 leading-20 font-noto-sans font-bold">
            Profil Desa Pulau Buaya
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto py-12 lg:py-28">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="w-3/4 lg:w-full h-56 lg:h-96 mx-auto"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=desa%20pulau%20buaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
