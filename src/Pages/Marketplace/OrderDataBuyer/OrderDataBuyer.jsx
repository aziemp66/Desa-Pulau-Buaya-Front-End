import formatDate from "../../../Utilities/FormatDate/FormatDate";

const orderDataBuyer = (props) => (
  <div className="mb-4 pt-2 px-4 bg-white">
    <div className="pb-2 flex items-start justify-between">
      <p className="flex-none text-sm font-medium">
        {formatDate(props.data.date)}
      </p>
      {props.children}
    </div>
    <div className="[&>*]:py-2 divide-y-2 divide-blue-light">
      <div>
        <p className="font-medium">Pembeli:</p>
        <p className="text-sm">{props.data.name}</p>
      </div>
      <div>
        <p className="text-slate-400 font-medium text-sm">Alamat Tujuan:</p>
        <p className="leading-4 text-sm">{props.data.address}</p>
      </div>
      <div>
        <table className="[&>*>*>*]:font-normal [&>*>*>*]:text-sm [&>*>*>*:nth-child(2)]:pl-4 table-auto border-spacing-14 text-left">
          <tbody>
            <tr>
              <th>Email:</th>
              <th>{props.data.email}</th>
            </tr>
            <tr>
              <th>No. Telepon:</th>
              <th>{props.data.phone}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-medium">Pesanan:</p>
        <div className="divide-y-2 divide-blue-light">
          {props.data.order.map((item, index) => (
            <div
              className="flex flex-row items-start justify-start"
              key={index}
            >
              <div className="flex-1 flex flex-row">
                <div className="flex-none w-[50px] h-[50px] rounded-lg">
                  <img src={item.image} alt="Gambar Produk" />
                </div>
                <div className="flex-1 p-2 text-sm flex flex-row align-start justify-between">
                  <p className="flex-none w-[100px] mr-4 font-inter">
                    {item?.name ? item.name : "Produk Tidak Ditemukan"}
                  </p>
                  <div className="flex-1 flex flex-row align-start justify-between">
                    <p className="flex-none">{item.amount}</p>
                    <p className="flex-none text-blue-dark">
                      Rp {item.price.toLocaleString("in-ID")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium">Detail Pembayaran:</p>
        <div className="flex items-center justify-between">
          <p className="text-sm">Price</p>
          <p className="text-sm font-medium">Rp. {props.data.price}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Ongkir</p>
          <p className="text-sm font-medium">Rp. {props.data.shipping}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Subtotal</p>
          <p className="text-sm font-semibold">Rp. {props.data.totalPrice}</p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
);

export default orderDataBuyer;
