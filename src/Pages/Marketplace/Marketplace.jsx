import Searchbox from "../../Components/Searchbox/Searchbox";
import Card from "./Card/Card";

const marketplace = () => {
  return (
    <div className="font-inter">
      <div className="p-4 bg-blue-light">
        <Searchbox />
        <div className="my-6">
          <p className="mb-2 text-lg font-semibold text-white text-center">
            Semua Produk
          </p>
          {/* setelah ngejalanin line dibawah, card nyo muncul lagi background imageny*/}
          {/* <div className={`w-44 h-44 bg-red bg-cover bg-no-repeat bg-center bg-[image:url('./src/Assets/jerukSegar.jpeg')]`}></div> */}
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="table mx-auto mt-6 blue-btn-round-inverted">
            Tampilkan Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
};

export default marketplace;
