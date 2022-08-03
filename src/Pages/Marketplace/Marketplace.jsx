import Searchbox from "../../Components/Searchbox/Searchbox";
import Card from "./Card/Card";

const marketplace = () => {
  return (
    <div className="p-4 bg-blue-light">
      <Searchbox />
      <div className="mt-6">
        <p className="mb-2 text-lg font-semibold text-white text-center">
          Semua Produk
        </p>
        {/* setelah ngejalanin line dibawah, card nyo muncul lagi background imageny*/}
        {/* <div className={`w-44 h-44 bg-red bg-cover bg-no-repeat bg-center bg-[image:url('./src/Assets/jerukBusuk.jpg')]`}></div> */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <span className="table px-3 mt-6 mx-auto text-blue-dark font-noto-sans bg-white border-blue-dark rounded-full">
          Tampilkan Lebih Banyak
        </span>
      </div>
    </div>
  );
};

export default marketplace;
