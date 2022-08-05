import { Link } from "react-router-dom";
import RectangleImageContainer from "../../../Components/RectangleImageContainer/RectangleImageContainer";

import jerukSegar from "../../../Assets/jerukSegar.jpeg";

const productList = () => {
  const data = [
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
    { id: "23102033", name: "Jeruk Segar", image: jerukSegar, price: 10000 },
  ];
  return (
    <div className="bg-blue-light">
      <div className="max-w-[700px] mx-auto pt-6 pb-8">
        <p className="pl-2 md:pl-0 pb-4 text-lg font-semibold text-white">
          Edit Produk
        </p>
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
              <Link
                className="w-20 mb-2 text-sm flex-none border-2 border-blue-dark blue-btn"
                to="/marketplace/product/edit"
              >
                Edit
              </Link>
              <button className="w-20 text-sm flex-none blue-btn-inverted">
                Hapus
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8 w-full">
          <Link
            to="/marketplace/admin"
            className="table mx-auto py-1 px-8 blue-btn-round-inverted"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default productList;
