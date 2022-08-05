import { Link } from "react-router-dom";
import RectangleImageContainer from "../../../Components/RectangleImageContainer/RectangleImageContainer";

import jerukSegar from "../../../Assets/jerukSegar.jpeg";

const editProduct = () => {
  const data = [
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
  ];
  return (
    <div className="pt-6 pb-8 bg-blue-light">
      {data.map((product, index) => (
        <div
          key={index}
          className="mb-4 h-28 bg-white flex items-center justify-center"
        >
          <Link
            className="flex-1 flex items-center justify-start"
            to="/marketplace/product"
          >
            <div className="flex-1 rounded-lg">
              {/* jalankan ini kalo rectabngle image ny nganeh*/}
              {/* <RectangleImageContainer className="max-w-[80px]" size="80px" image={jerukSegar} /> */}
              <RectangleImageContainer size="80px" image={product.image} />
            </div>
            <div className="flex-1 p-2 bg-white">
              <p className="text-sm font-medium font-inter">
                {product?.name ? product.name : "Produk Tidak Ditemukan"}
              </p>
              <p className="text-md">
                {product?.price
                  ? "Rp." + product.price.toLocaleString("in-ID")
                  : ""}
              </p>
            </div>
          </Link>
          <div className="pr-2 flex flex-col items-center justify-center">
            <button className="w-20 mb-2 text-sm flex-none border-2 border-blue-dark blue-btn">
              Edit
            </button>
            <button className="w-20 text-sm flex-none blue-btn-inverted">
              Hapus
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8 w-full">
        <Link
          to="/marketplace/product/add"
          className="table mx-auto blue-btn-inverted"
        >
          Tambah Produk
        </Link>
      </div>
    </div>
  );
};

export default editProduct;
