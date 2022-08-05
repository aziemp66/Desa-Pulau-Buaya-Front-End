import { useState } from "react";
import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import CustomTextInput from "../../../Components/CustomForm/CustomTextInput/CustomTextInput";
import CustomPasswordInput from "../../../Components/CustomForm/CustomPasswordInput/CustomPasswordInput";
import CustomNumberInput from "../../../Components/CustomForm/CustomNumberInput/CustomNumberInput";
import CustomTextareaInput from "../../../Components/CustomForm/CustomTextareaInput/CustomTextareaInput";

const marketplaceSignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title="Daftarkan Akun">
        <div className="[&>*]:mb-4 py-8 px-4">
          <CustomTextInput
            name="Nama"
            placeholder="Masukkan Nama Anda"
            state={name}
            setState={setName}
          />
          <CustomTextInput
            name="Email"
            placeholder="emailanda@email.com"
            state={email}
            setState={setEmail}
          />
          <CustomPasswordInput
            name="Password"
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
        <div className="pb-6 px-2">
          <button className="mb-2 blue-btn w-full">Daftar</button>
          <div className="text-center text-slate-500">
            Sudah Punya Akun?{" "}
            <Link className="text-blue-dark" to="/marketplace/login">
              Masuk Disini
            </Link>
          </div>
        </div>
      </CustomFrame>
    </div>
  );
};

export default marketplaceSignIn;
