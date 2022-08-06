import { Link } from "react-router-dom";
import CancelIcon from "../../../Assets/Icons/cancel-icon.svg?component";

const admin = () => (
  <div className="relative bg-blue-light w-full h-[100vh]">
    <div className="max-w-[700px] mx-auto">
      <div className="absolute top-5 right-5">
        <Link to="/marketplace">
          <CancelIcon />
        </Link>
      </div>
      <div className="pt-12 pb-6 mx-auto w-36 flex flex-col items-center">
        <Link
          className="flex-none border-2 border-blue-dark py-1 px-4 mb-2 blue-btn-round"
          to="/marketplace/product/add"
        >
          Tambah Produk
        </Link>
        <Link
          className="flex-none py-1 px-8 blue-btn-round"
          to="/marketplace/product"
        >
          Edit Produk
        </Link>
        <Link to="/marketplace" className="font-bold text-red-500">
          Log Out
        </Link>
      </div>
      <div className="flex flex-col [&>*]:p-2 [&>*]:font-medium divide-blue-light text-blue-light divide-y bg-white">
        <Link to="/marketplace/statistics">Data Statistik</Link>
        <Link to="/">Lihat Profil Desa</Link>
        <Link to="/marketplace/order">Cek Pesanan</Link>
      </div>
    </div>
  </div>
);

export default admin;
