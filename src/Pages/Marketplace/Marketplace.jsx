import { useState } from "react";
import Searchbox from "../../Components/Searchbox/Searchbox";
import CustomCheckbox from "../../Components/CustomCheckbox/CustomCheckbox";
import FilterIcon from "../../Assets/Icons/filterIcon.svg?component";
import FilterIconActive from "../../Assets/Icons/filterIconActive.svg?component";
import Card from "./Card/Card";

const marketplace = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 0]);
  const [descendingOrder, setDescendingOrder] = useState(false);

  const categories = ["Pakaian", "Tas", "Kain", "Barang"];
  return (
    <div className="font-inter">
      <div className="p-4 bg-blue-light">
        <div className="flex items-center justify-between">
          <Searchbox state={search} setState={setSearch} />
          <button
            className="ml-2"
            onClick={() => {
              setFilter(!filter);
            }}
          >
            {filter ? <FilterIcon /> : <FilterIconActive />}
          </button>
        </div>
        {filter && (
          <div className="mt-6 p-3 bg-white rounded-2xl ">
            <div className="mb-4">
              <p className="mb-1 text-lg text-blue-light font-medium">
                Kategori
              </p>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                {categories.map((c) => (
                  <div className="flex-none flex flex-row">
                    <CustomCheckbox
                      state={category === c ? true : false}
                      setState={(bool) => {
                        bool ? setCategory(c) : setCategory("");
                      }}
                    />
                    <span className="ml-1">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-lg text-blue-light font-medium">Harga</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm">Minimum</p>
                  <div className="flex flex-row align-center">
                    <p className="mr-2 font-semibold text-blue-light">Rp</p>
                    <input
                      className="max-w-[130px] focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full block rounded-full border-2 border-blue-light px-3"
                      type="number"
                      value={price[0]}
                      onChange={(e) => {
                        setPrice([+e.target.value || 0, price[1]]);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm">Maximum</p>
                  <div className="flex flex-row align-center">
                    <p className="mr-2 font-semibold text-blue-light">Rp</p>
                    <input
                      className="max-w-[130px] focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full block rounded-full border-2 border-blue-light px-3"
                      type="number"
                      value={price[1]}
                      onChange={(e) => {
                        setPrice([price[0], +e.target.value || 0]);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <p className="mb-1 text-lg text-blue-light font-medium">
                Urutkan
              </p>
              <div className="flex flex-row [&>*]:text-sm">
                <button
                  className={
                    (descendingOrder
                      ? "blue-btn-round "
                      : "blue-btn-round-inverted ") + "flex-1 mr-4"
                  }
                  onClick={() => {
                    setDescendingOrder(true);
                  }}
                >
                  Harga Tertinggi
                </button>
                <button
                  className={
                    (descendingOrder
                      ? "blue-btn-round-inverted "
                      : "blue-btn-round ") + "flex-1 mr-4"
                  }
                  onClick={() => {
                    setDescendingOrder(false);
                  }}
                >
                  Harga Terendah
                </button>
              </div>
            </div>
            <div className="flex align-center justify-center">
              <button
                className="py-2 px-6 blue-btn-round"
                onClick={() => {
                  setFilter(!filter);
                }}
              >
                Gunakan Filter
              </button>
            </div>
          </div>
        )}
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
