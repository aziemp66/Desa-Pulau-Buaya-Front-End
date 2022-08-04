import { useState } from "react";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";
import formatDate from "../../../Utilities/FormatDate/FormatDate";

const order = () => {
  const [show, setShow] = useState("Semua");
  const showValues = ["Semua", "Dalam Proses", "Selesai"];

  //cuma utk development
  const data = [{ id: "23102003", date: new Date(2021, 10, 3) }];

  return (
    <div className="font-inter bg-blue-light">
      <div className="p-4 flex flex-row">
        <span className="mr-2 font-medium text-white">Tampilkan</span>
        <CustomDropdown state={show} setState={setShow} values={showValues} />
      </div>
      <div className="relative bg-white"></div>
    </div>
  );
};

export default order;
