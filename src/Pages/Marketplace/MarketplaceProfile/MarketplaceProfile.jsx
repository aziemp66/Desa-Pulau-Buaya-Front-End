import { useState } from "react";
import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import CustomTextInput from "../../../Components/CustomForm/CustomTextInput/CustomTextInput";
import CustomPasswordInput from "../../../Components/CustomForm/CustomPasswordInput/CustomPasswordInput";
import CustomNumberInput from "../../../Components/CustomForm/CustomNumberInput/CustomNumberInput";
import CustomTextareaInput from "../../../Components/CustomForm/CustomTextareaInput/CustomTextareaInput";

const marketplaceProfile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title="Edit Profil">
        <div className="[&>*]:mb-4 pt-8 pb-2 px-4">
          <CustomTextInput
            name="Nama"
            placeholder="Masukkan Nama Anda"
            state={name}
            setState={setName}
          />
          <CustomPasswordInput
            name="Password Baru"
            placeholder="Masukkan Password"
            state={password}
            setState={setPassword}
            showState={showPassword}
            setShowState={setShowPassword}
          />
          <CustomPasswordInput
            name="Confim Password"
            placeholder="Masukkan Password"
            state={confirmPassword}
            setState={setConfirmPassword}
            showState={showConfirmPassword}
            setShowState={setShowConfirmPassword}
          />
          <CustomNumberInput
            name="Nomor Telepon"
            placeholder="08127963421"
            state={phone}
            setState={setPhone}
          />
          <CustomTextareaInput
            name="Alamat"
            placeholder="Masukkan alamat lengkap (Jalan, No. Rumah, Kota, Provinsi, Kode Pos, dsb.)"
            state={address}
            setState={setAddress}
          />
        </div>
        <div className="pb-6 px-2 text-sm flex items-center">
          <button className="flex-none py-1 w-24 mr-4 blue-btn border-2 border-blue-dark">
            Perbarui
          </button>
          <button className="flex-none py-1 w-24 blue-btn-inverted">
            Batal
          </button>
        </div>
      </CustomFrame>
    </div>
  );
};

export default marketplaceProfile;
