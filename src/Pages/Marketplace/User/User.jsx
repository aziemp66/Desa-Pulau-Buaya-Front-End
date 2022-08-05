import { Link } from "react-router-dom";
import CancelIcon from "../../../Assets/Icons/cancel-icon.svg?component";

const user = () => (
  <div className="relative bg-blue-light w-[100vw] h-[100vh]">
    <div className="px-4 pt-8">
      <p className="text-lg">Selamat Datang,</p>
      <p className="text-lg text-white">Nama Pelanggan</p>
    </div>
    <div className="absolute top-5 right-5">
      <Link to="/marketplace">
        <CancelIcon />
      </Link>
    </div>
    <div className="pt-12 pb-6 mx-auto w-36 flex flex-col items-center">
      <Link
        className="flex-none py-1 px-8 mb-2 blue-btn-round"
        to="/marketplace/profile"
      >
        Edit Profil
      </Link>
      <Link to="/marketplace" className="font-bold text-red-500">
        Log Out
      </Link>
    </div>
    <div className="flex flex-col [&>*]:p-2 [&>*]:font-medium divide-blue-light text-blue-light divide-y bg-white">
      <Link to="/marketplace/statistics">Data Statistik</Link>
      <Link to="/">Lihat Profil Desa</Link>
      <Link to="/marketplace/cart">Keranjang Saya</Link>
      <Link to="/marketplace/history">Riwayat Belanja</Link>
    </div>
  </div>
);

export default user;
