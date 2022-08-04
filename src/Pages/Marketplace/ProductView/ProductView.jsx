import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RectangleImageContainer from "../../../Components/RectangleImageContainer/RectangleImageContainer";
import ItemCounter from "../../../Components/ItemCounter/ItemCounter";
import Card from "../Card/Card";

//cuma utk development
import productImage from "../../../Assets/jerukSegar.jpeg";
import imageNotAvailable from "../../../Assets/imageNotAvailable.jpeg";

const productView = () => {
  const location = useLocation();

  const query = Object.fromEntries(new URLSearchParams(location.search));

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
    <div className="font-inter">
      <div className="py-4 px-6 bg-blue-light">
        <RectangleImageContainer
          size="300px"
          image={data.id ? data.image : imageNotAvailable}
        />
      </div>
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
          <div className="p-4 min-h-[220px]">
            <p className="text-blue-light font-medium">Deskripsi Produk:</p>
            <p className="pt-2 text-sm">{data.description}</p>
          </div>
          <div className="pt-4 pb-8 px-6 bg-blue-light">
            <div className="p-4 bg-white rounded-xl">
              <ItemCounter state={buyAmount} setState={setBuyAmount} />
              <div className="pt-4 font-medium text-sm text-white flex items-center justify-center">
                <button className="flex-1 px-2 py-1 mr-2 text-center rounded-xl bg-blue-dark">
                  + Keranjang
                </button>
                <Link
                  className="flex-1 px-2 py-1 text-center rounded-xl bg-blue-dark"
                  to="/marketplace/cart"
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="py-2 pl-4 font-semibold bg-white">Produk Lainnya</div>
      <div className="relative w-screen pt-4 pl-4 pb-10 [&>*]:min-w-[150px] [&>*]:mr-4 flex flex-row items-center overflow-x-auto bg-blue-light">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default productView;
