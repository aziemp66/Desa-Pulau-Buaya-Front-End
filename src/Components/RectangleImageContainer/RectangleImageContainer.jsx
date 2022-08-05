const rectangleImageContainer = (props) => {
  return (
    // <div className={`max-w-[300px] mx-auto bg-black`}>
    <div className={`max-w-[${props.size}] mx-auto bg-slate-500`}>
      <div className={`relative w-full pt-[100%]`}>
        <div className="absolute inset-x-0 top-1/2 translate-y-[-50%]">
          <img
            className="max-w-full max-h-full my-auto"
            src={props.image}
            alt="Gambar Tidak Ditemukan"
          />
        </div>
      </div>
    </div>
  );
};

export default rectangleImageContainer;
