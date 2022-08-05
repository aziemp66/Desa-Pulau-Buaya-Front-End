import { useState } from "react";
import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import CustomTextInput from "../../../Components/CustomForm/CustomTextInput/CustomTextInput";
import CustomPasswordInput from "../../../Components/CustomForm/CustomPasswordInput/CustomPasswordInput";

const marketplaceLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title="Masuk">
        <div className="[&>*]:mb-4 py-8 px-4">
          <CustomTextInput
            name="Email"
            placeholder="emailanda@email.com"
            state={email}
            setState={setEmail}
          />
          <CustomPasswordInput
            name="Password"
            placeholder="Password Anda"
            showState={showPassword}
            setShowState={setShowPassword}
            state={password}
            setState={setPassword}
          />
        </div>
        <div className="pb-6 px-2">
          <Link className="table mb-2 blue-btn w-full" to="/marketplace/user">
            Masuk
          </Link>
          <div className="text-center text-slate-500">
            Belum Punya Akun?{" "}
            <Link className="text-blue-dark" to="/marketplace/signin">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </CustomFrame>
    </div>
  );
};

export default marketplaceLogin;
