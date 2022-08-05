import { useState } from "react";
import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import CustomTextInput from "../../../Components/CustomForm/CustomTextInput/CustomTextInput";
import CustomFileInput from "../../../Components/CustomForm/CustomFileInput/CustomFileInput";
import CustomNumberInput from "../../../Components/CustomForm/CustomNumberInput/CustomNumberInput";
import CustomTextareaInput from "../../../Components/CustomForm/CustomTextareaInput/CustomTextareaInput";

const productForm = (props) => {
  const [name, setName] = useState("");
  const [filename, setFilename] = useState("Tidak Ada File Dipilih");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [uploadStatus, setUploadStatus] = useState(false);
  const [queryDone, setQueryDone] = useState(false);

  return (
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title={props.title}>
        <form
          className="pb-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="[&>*]:mb-4 py-8 px-4">
            <CustomTextInput
              name="Nama Barang"
              placeholder="Masukkan Nama Barang"
              state={name}
              setState={setName}
            />
            <CustomFileInput
              title="Upload Foto"
              display="Pilih Foto"
              name="file"
              state={filename}
              setState={setFilename}
            />
            <CustomNumberInput
              name="Harga"
              placeholder="Harga Barang"
              state={price}
              setState={setPrice}
            />
            <CustomTextareaInput
              name="Deskripsi"
              placeholder="Deskripsi Produk"
              state={description}
              setState={setDescription}
            />
            <CustomTextInput
              name="Kategori"
              placeholder="Masukkan Kategori Produk"
              state={category}
              setState={setCategory}
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
          {queryDone && (
            <div
              className={
                (uploadStatus ? "" : "text-red-500 ") +
                "pl-4 font-medium text-left text-sm"
              }
            >
              {uploadStatus
                ? "Perubahan Berhasil Disimpan"
                : "Produk Tidak Terkirim"}
              .{" "}
              <Link
                className="underline text-blue-dark"
                to="/marketplace/signin"
              >
                {uploadStatus ? "Lihat Produk" : "Coba Lagi"}
              </Link>
            </div>
          )}
        </form>
      </CustomFrame>
    </div>
  );
};

export default productForm;
