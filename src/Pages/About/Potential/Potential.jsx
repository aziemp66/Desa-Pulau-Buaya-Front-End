import React from "react";

const Potential = () => {
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-about.jpg')] bg-no-repeat bg-center bg-cover relative w-full h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center gap-4 items-center flex-col ">
          <h1 className="text-white text-center text-xl lg:text-6xl lg:w-1/2 leading-20 font-noto-sans font-bold">
            Profil Desa Pulau Buaya
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto py-12 lg:py-28">
        <article className="bg-cream-light flex flex-col justify-center items-center gap-4 lg:gap-8 text-sm lg:text-base">
          <p className="bg-inherit">
            Pulau Buaya memiliki potensi yang beragam baik dari sumber daya
            manusia maupun sumber daya alamnya. Pulau buaya termasuk penghasil
            kain tenun terbaik di Alor. Tenun diyakini sebagai warisan budaya
            leluhur yang asal usulnya pun sudah sulit diketahui dan dahulu,
            tenun merupakan pakaian yang digunakan masyarakat untuk menghadiri
            acara-acara penting. Seperti yang telah diketahui, ibu-ibu yang ada
            di desa ini sebagian besar berprofesi sebagai pengrajin kain tenun
            Alor yang menghasilkan kualitas yang baik walaupun dibuat dengan
            alat tradisional. Sebagian pengrajin tenun di desa ini masih
            mempertahankan bahan baku dan pewarna alami dengan metode pengerjaan
            yang memakan waktu lama. Untuk harga kain tenun sendiri ditentukan
            oleh motif, bahan baku, dan kerumitan proses pembuatannya. Dalam
            proses penjualannya, sebagian besar pengrajin menjual hasil tenunnya
            ke pasar. Tenun tersebut dijual di pasar dan hasilnya akan digunakan
            untuk memenuhi kebutuhan rumah sehari-hari. Kain Tenun dirasa mampu
            memberikan dampak yang cukup besar jika masyarakat mampu mengelola
            industri kreatif dengan benar dengan target pasar yang tepat.
          </p>
          <p className="bg-inherit">
            Selain pengrajin kain tenun, masyarakat Desa Pulau Buaya juga
            melakukan pekerjaan beternak dan bertani yang umumnya dilakukan oleh
            perempuan dan para ibu-ibu. Kambing adalah hewan yang paling dominan
            sebagai ternak selain ayam kampung. Menurut data yang bersumber dari
            Dinas Peternakan Kabupaten Alor tahun 2020, kambing merupakan ternak
            yang paling banyak dipelihara di Pulau Buaya dengan jumlah 624 ekor.
            Masyarakat yang bertani di Desa Pulau Buaya ini bercocok tanam
            berupa jagung, kacang hijau, dan kacang merah di lahan pertaniannya
            meski tidak tersedia embung di desanya.
          </p>
          <p className="bg-inherit">
            Kabupaten Alor terkenal dengan potensi wisata yang beragam di
            dalamnya. Pulau Buaya sendiri merupakan pulau yang memiliki
            keindahan pantai dan wisata bahari taman laut yang menakjubkan bagi
            para wisatawan yang berkunjung. Pulau ini disebut Pulau Buaya karena
            jika dilihat dari kejauhan, bentuknya mirip seperti buaya yang
            sedang tertidur. Pulau Buaya dikenal dengan pantainya yang
            berkarakter pasir putih dengan garis pantai cukup panjang. Airnya
            yang jernih menimbulkan gradasi warna biru tosca yang menakjubkan di
            sisi laut yang lebih dalam. Tersedia juga spot bagi para penyelam
            untuk melihat terumbu karang yang masih terjaga dengan baik.
            Kepungan pulau-pulau kecil lain yang ada di sekitar dan memiliki
            ketinggian berbeda menambah keindahan lanskap pulau ini
          </p>
        </article>
      </div>
    </div>
  );
};

export default Potential;
