import { useState } from "react";
import { Link } from "react-router-dom";
import useIfDesktop from "../../CustomHooks/UseIfDesktop";
import Searchbox from "../../Components/Searchbox/Searchbox";
import CustomCheckbox from "../../Components/CustomCheckbox/CustomCheckbox";
import FilterIcon from "../../Assets/Icons/filterIcon.svg?component";
import FilterIconActive from "../../Assets/Icons/filterIconActive.svg?component";
import CancelIcon from "../../Assets/Icons/cancel-icon.svg?component";
import Card from "./Card/Card";

const FilterForm = (props) => (
  <div className="p-3 bg-white rounded-2xl ">
    <div className="mb-4">
      <p className="mb-1 text-lg text-blue-light font-medium">Kategori</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {props.categories.map((c) => (
          <div className="flex-none flex flex-row">
            <CustomCheckbox
              state={props.category === c ? true : false}
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
              value={props.price[0]}
              onChange={(e) => {
                props.setPrice([+e.target.value || 0, props.price[1]]);
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
              value={props.price[1]}
              onChange={(e) => {
                props.setPrice([props.price[0], +e.target.value || 0]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mb-8">
      <p className="mb-1 text-lg text-blue-light font-medium">Urutkan</p>
      <div className="flex flex-row [&>*]:py-1 [&>*]:text-sm">
        <button
          className={
            (props.descendingOrder
              ? "blue-btn-round "
              : "blue-btn-round-inverted ") + "flex-1 mr-4"
          }
          onClick={() => {
            props.setDescendingOrder(true);
          }}
        >
          Harga Tertinggi
        </button>
        <button
          className={
            (props.descendingOrder
              ? "blue-btn-round-inverted "
              : "blue-btn-round ") + "flex-1 mr-4"
          }
          onClick={() => {
            props.setDescendingOrder(false);
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
          props.setFilter(!props.filter);
        }}
      >
        Gunakan Filter
      </button>
    </div>
  </div>
);

const marketplace = () => {
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 0]);
  const [descendingOrder, setDescendingOrder] = useState(false);

  const isDesktop = useIfDesktop();

  const categories = ["Pakaian", "Tas", "Kain", "Barang"];
  return (
    <div className="font-inter bg-blue-light">
      {login ? (
        <div className="p-4 lg:flex lg:flex-row lg:max-w-[1080px] mx-auto items-start">
          <div className="flex-1 mr-4">
            <div className="flex items-center justify-between">
              <Searchbox state={search} setState={setSearch} />
              {!isDesktop && (
                <button
                  className="ml-2"
                  onClick={() => {
                    setFilter(!filter);
                  }}
                >
                  {filter ? <FilterIcon /> : <FilterIconActive />}
                </button>
              )}
            </div>
            {filter && !isDesktop && (
              <div className="mt-6">
                <FilterForm
                  categories={categories}
                  filter={filter}
                  setFilter={setFilter}
                  category={category}
                  setCategory={setCategory}
                  price={price}
                  setPrice={setPrice}
                  descendingOrder={descendingOrder}
                  setDescendingOrder={setDescendingOrder}
                />
              </div>
            )}
            <div className="my-6">
              <p className="mb-2 text-lg font-semibold text-white text-center">
                Semua Produk
              </p>
              {/* setelah ngejalanin line dibawah, card nyo muncul lagi background imageny*/}
              {/* <div className={`w-44 h-44 bg-red bg-cover bg-no-repeat bg-center bg-[image:url('./src/Assets/jerukSegar.jpeg')]`}></div> */}
              <div className="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
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
          {isDesktop && (
            <div>
              <div className="flex flex-row items-center justify-start">
                <button
                  className="ml-2"
                  onClick={() => {
                    setFilter(!filter);
                  }}
                >
                  <FilterIconActive />
                </button>
                <p className="font-medium text-white">Filter</p>
              </div>
              <div className="mt-2">
                <FilterForm
                  className="flex-none w-[320px]"
                  categories={categories}
                  filter={filter}
                  setFilter={setFilter}
                  category={category}
                  setCategory={setCategory}
                  price={price}
                  setPrice={setPrice}
                  descendingOrder={descendingOrder}
                  setDescendingOrder={setDescendingOrder}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full h-[100vh]">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => {
                setLogin(true);
              }}
            >
              <CancelIcon />
            </button>
          </div>
          <div className="max-w-[700px] mx-auto">
            <div className="pt-12 pb-6 mx-auto w-36 flex flex-col">
              <Link
                className="flex-none mb-2 blue-btn-round-inverted"
                to="/marketplace/signup"
              >
                Daftar
              </Link>
              <Link
                className="flex-none py-1 blue-btn-round"
                to="/marketplace/login"
              >
                Masuk
              </Link>
            </div>
            <div className="flex flex-col [&>*]:p-2 [&>*]:font-medium divide-blue-light text-blue-light divide-y bg-white">
              <Link to="/marketplace/statistics">Data Statistik</Link>
              <Link to="/">Lihat Profil Desa</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default marketplace;
