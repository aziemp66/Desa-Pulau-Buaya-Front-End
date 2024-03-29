import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useIfDesktop from "../../../CustomHooks/UseIfDesktop";
import RectangleImageContainer from "../../../Components/RectangleImageContainer/RectangleImageContainer";
import ItemCounter from "../../../Components/ItemCounter/ItemCounter";
import Card from "../Card/Card";

//cuma utk development
import productImage from "../../../Assets/jerukSegar.jpeg";
import imageNotAvailable from "../../../Assets/imageNotAvailable.jpeg";

const productView = () => {
  const location = useLocation();

  const query = Object.fromEntries(new URLSearchParams(location.search));

  const isDesktop = useIfDesktop();

  const [buyAmount, setBuyAmount] = useState(0);

  //cuma utk development
  let data;
  if (query.id == "23102003") {
    data = {
      id: "23102003",
      title: "Jeruk Segar",
      image: productImage,
      description: "Jeruk segar baru dipetik trus langsung difoto hehehe...",
      price: 10000,
    };
  } else {
    data = {
      id: "",
    };
  }

  return (
    <div className="py-10 bg-blue-light font-inter">
      <div className="lg:pb-10 lg:flex lg:flex-row items-start justify-center">
        {isDesktop ? (
          <div className="mr-6 w-[300px]">
            <div className="mb-4 rounded-xl overflow-hidden h-[300px]">
              <img
                src={data.id ? data.image : imageNotAvailable}
                alt="Gambar Produk"
              />
            </div>
            <div className="bg-blue-light">
              <div className="p-4 bg-white rounded-xl">
                <ItemCounter state={buyAmount} setState={setBuyAmount} />
                <div className="pt-4 font-medium text-sm text-white flex items-center justify-center">
                  <button className="flex-1 mr-2 blue-btn">+ Keranjang</button>
                  <Link className="flex-1 blue-btn" to="/marketplace/cart">
                    Beli Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4 px-6">
            <RectangleImageContainer
              size="300px"
              image={data.id ? data.image : imageNotAvailable}
            />
          </div>
        )}
        <div className="lg:w-[700px] lg:mx-0 max-w-[700px] mx-auto">
          <div className="px-4 py-2 bg-white drop-shadow-xl">
            <p className="text-md font-medium">
              {data.id ? data.title : "Produk Tidak Ditemukan"}
            </p>
            <p className="pt-1">
              {data.id ? `Rp. ${data.price.toLocaleString("in-ID")}` : ""}
            </p>
          </div>
          {data.id ? (
            <>
              <div className="p-4 min-h-[220px] bg-white">
                <p className="text-blue-light font-medium">Deskripsi Produk:</p>
                <p className="pt-2 text-sm">{data.description}</p>
              </div>
              {!isDesktop && (
                <div className="pt-4 pb-8 px-6 bg-blue-light">
                  <div className="p-4 bg-white rounded-xl">
                    <ItemCounter state={buyAmount} setState={setBuyAmount} />
                    <div className="pt-4 font-medium text-sm text-white flex items-center justify-center">
                      <button className="flex-1 mr-2 blue-btn">
                        + Keranjang
                      </button>
                      <Link className="flex-1 blue-btn" to="/marketplace/cart">
                        Beli Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="py-2 pl-4 font-semibold bg-white">Produk Lainnya</div>
      <div className="scrollbar relative w-screen pt-4 pl-4 pb-4 [&>*]:min-w-[150px] [&>*]:mr-4 flex flex-row items-center overflow-x-auto bg-blue-light">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="relative h-4 w-full top-[-8px]"></div>
    </div>
  );
};

export default productView;
