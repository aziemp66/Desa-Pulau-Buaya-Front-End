const card = () => {
  return (
    <div className="flex flex-col overflow-hidden h-44 bg-blue-400 rounded-xl shadow-md">
      <div className="flex-1 bg-cover bg-no-repeat bg-center bg-[image:url('./src/Assets/jerukBusuk.jpg')]"></div>
      <div className="flex-none h-14 w-full p-2 bg-white">
        <p className="text-sm text-blue-dark font-semibold font-noto-sans">
          Jeruk Segar
        </p>
        <p className="font-noto-sans">Rp. 100.000</p>
      </div>
    </div>
  );
};

export default card;
