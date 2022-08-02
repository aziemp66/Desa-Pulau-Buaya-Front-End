import Searchbox from "../../Components/Searchbox/Searchbox";
import Card from "./Card/Card";

const marketplace = () => {
  return (
    <div className="p-4 bg-blue-light">
      <Searchbox />
      <div className="mt-6">
        <p className="text-lg font-semibold text-white text-center">
          Semua Produk
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <span className="table px-3 mt-4 mx-auto text-blue-dark font-noto-sans bg-white border-blue-dark rounded-full">
          Tampilkan lebih banyak
        </span>
      </div>
    </div>
  );
};

export default marketplace;
