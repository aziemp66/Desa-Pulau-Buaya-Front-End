import React from "react";

const vilageChiefs = [
  {
    name: "Sudirman Busa",
    period: "1995 - 2006",
    note: "Dua Periode",
  },
  {
    name: "Mukhrim Usman",
    period: "2006 - 2009",
    note: "Empat tahun",
  },
  {
    name: "Samsah Wahid",
    period: "2009 - 2011",
    note: "Plt. Dua Tahun",
  },
  {
    name: "Samsah Wahid",
    period: "2011 - 2012",
    note: "Plt. Satu Tahun",
  },
  {
    name: "Samsah Wahid",
    period: "2012 - 2018",
    note: "Satu Periode",
  },
  {
    name: "Samsah Wahid",
    period: "2018 - 2019",
    note: "Plt. Satu Tahun",
  },
  {
    name: "Kasim Anwar",
    period: "2019 -2025",
    note: "Satu Periode",
  },
];

const ChiefInfo = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-kepaladesa.jpg')] bg-no-repeat bg-center bg-cover relative w-full h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-xl lg:text-6xl font-noto-sans font-bold">
            Info Kepala Desa Pulau Buaya
          </h1>
        </div>
      </div>
      <div className="lg:w-4/5 mx-auto py-12 lg:py-24">
        <div className="mb-4">
          <p className="text-xs lg:text-base">
            Berikut adalah daftar nama kepala desa Pulau Buaya beserta masa
            jabatannya.
          </p>
        </div>

        <table className="table-auto w-full text-xs mx-auto lg:text-base">
          <thead>
            <tr>
              <th className="text-center py-3">No.</th>
              <th className="text-center py-3">Masa Jabatan</th>
              <th className="text-center py-3">Nama Kepala Desa</th>
              <th className="text-center py-3">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {vilageChiefs.map((chief, index) => (
              <tr className="border-y border-black" key={index}>
                <td className="text-center py-3">{index + 1}</td>
                <td className="text-center py-3">{chief.period}</td>
                <td className="text-center py-3">{chief.name}</td>
                <td className="text-center py-3">{chief.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChiefInfo;
