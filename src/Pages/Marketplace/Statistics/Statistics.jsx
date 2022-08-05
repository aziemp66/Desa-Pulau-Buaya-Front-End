import { useState } from "react";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";
import ChevronRight from "../../../Assets/Icons/chevron-right.svg?component";
import ChevronLeft from "../../../Assets/Icons/chevron-left.svg?component";
import Chart from "./Chart/Chart.jsx";
import data from "./Data";

const statistics = () => {
  const showValues = ["Perhari", "Perminggu", "Perbulan"];
  const [show, setShow] = useState("Perminggu");

  const titles = [
    "Statistik Penjualan",
    "Statistik Pengeluaran",
    "Statistik Pendapatan",
  ];
  const lineColor = ["#bfb6a4", "#ff4444", "#2b6474"];
  const [titleIndex, setTitleIndex] = useState(0);

  return (
    <div className="font-inter pb-4 bg-blue-light">
      <div className="pt-8 px-4 flex flex-row">
        <span className="mr-2 font-medium text-white">Tampilkan</span>
        <CustomDropdown state={show} setState={setShow} values={showValues} />
      </div>
      <div className="w-64 py-8 h-8 mx-auto flex flex-row items-center justify-between">
        <button
          onClick={() => {
            titleIndex !== 0
              ? setTitleIndex(titleIndex - 1)
              : setTitleIndex(titleIndex);
          }}
        >
          <ChevronLeft />
        </button>
        <div className="w-44 font-medium text-center">{titles[titleIndex]}</div>
        <button
          onClick={() => {
            titleIndex < titles.length - 1
              ? setTitleIndex(titleIndex + 1)
              : setTitleIndex(titleIndex);
          }}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="sm:w-[400px] sm:h-[400px] sm:mx-auto w-[100vmin] h-[100vmin] bg-white">
        <Chart data={data[titleIndex]} stroke={lineColor[titleIndex]} />
      </div>
    </div>
  );
};

export default statistics;
