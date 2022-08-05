import { useState } from "react";
import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import CustomFileInput from "../../../Components/CustomForm/CustomFileInput/CustomFileInput";

const addProduct = () => {
  const [filename, setFilename] = useState("Tidak Ada File Dipilih");
  const [uploadStatus, setUploadStatus] = useState(true);

  return (
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title="Tambahkan Produk">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="[&>*]:mb-4 py-8 px-4">
            <CustomFileInput
              title="Upload Foto"
              display="Pilih Foto"
              name="file"
              state={filename}
              setState={setFilename}
            />
          </div>
          <div className="mb-2 px-2 text-sm flex items-center">
            <input
              type="submit"
              value="Tambah"
              className="flex-none py-1 w-24 mr-4 blue-btn border-2 border-blue-dark"
            ></input>
            <Link
              to="/marketplace/product"
              className="flex-none py-1 w-24 blue-btn-inverted"
            >
              Batal
            </Link>
          </div>
          <div
            className={
              (uploadStatus ? "" : "text-red-500 ") +
              "pb-4 pl-4 font-medium text-left text-sm"
            }
          >
            {uploadStatus
              ? "Perubahan Berhasil Disimpan"
              : "Produk Tidak Terkirim"}
            .{" "}
            <Link className="underline text-blue-dark" to="/marketplace/signin">
              {uploadStatus ? "Lihat Produk" : "Coba Lagi"}
            </Link>
          </div>
        </form>
      </CustomFrame>
    </div>
  );
};

export default addProduct;
