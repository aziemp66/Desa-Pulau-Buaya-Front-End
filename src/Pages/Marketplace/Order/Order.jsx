import { useEffect, useState } from "react";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";
import formatDate from "../../../Utilities/FormatDate/FormatDate";

//cuma utk development
import jerukSegar from "../../../Assets/jerukSegar.jpeg";

const order = () => {
  const [show, setShow] = useState("Semua");
  const showValues = ["Semua", "Dalam Proses", "Selesai"];

  const [orderItemsLength, setOrderItemsLength] = useState(0);
  const [orderItems, setOrderItems] = useState({});
  const [orderItemsTemporaryStatus, setOrderItemsTemporaryStatus] = useState(
    {}
  );
  const orderItemStatusValues = ["done", "ongoing"];

  //cuma utk development
  const orderItemExample = {
    id: "1",
    date: new Date(2021, 10, 3),
    name: "Annisa Luthfi Fadillah",
    address:
      "Jl. Jalan Setapak, Lr. Setapak, RT 10/RW 30, No. 23, Kota Palembang, Sumatera Selatan, Kode Pos 12345",
    status: "ongoing",
    email: "emailsaya@gmail.com",
    phone: "08123456789",
    order: [
      {
        id: "23102003",
        name: "Jeruk Segar",
        amount: 2,
        price: 20000,
        image: jerukSegar,
      },
      {
        id: "23102004",
        name: "Jeruk Segar",
        amount: 5,
        price: 50000,
        image: jerukSegar,
      },
    ],
    price: 70000,
  };

  const data = [
    orderItemExample,
    { ...orderItemExample, id: "2", status: "done" },
  ];
  //utk development selesai

  const getData = (item) => {
    console.log(item.id);
    const newState = {
      ...orderItems,
      [item.id]: {
        date: item.date,
        name: item.name,
        address: item.address,
        status: item.status,
        email: item.email,
        phone: item.phone,
        order: item.order,
        price: item.price,
      },
    };
    console.log("newState");
    console.log(newState);

    setOrderItems(newState);
    setOrderItemsTemporaryStatus({
      ...orderItemsTemporaryStatus,
      [item.id]: item.status,
    });
  };

  useEffect(() => {
    try {
      getData(data[0]);
      setOrderItemsLength(orderItemsLength + 1);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      getData(data[orderItemsLength]);
      setOrderItemsLength(orderItemsLength + 1);
    } catch {}
  }, [orderItems]);

  const translateStatusToIn = (status) => {
    switch (status) {
      case "done":
        return "Selesai";
      case "ongoing":
        return "Dalam Proses";
      default:
        return "";
    }
  };

  const translateStatusToEng = (status) => {
    switch (status) {
      case "Selesai":
        return "done";
      case "Dalam Proses":
        return "ongoing";
      default:
        return "";
    }
  };

  return (
    <div className="font-inter pb-4 bg-blue-light">
      <div className="pt-8 pb-4 px-4 flex flex-row">
        <span className="mr-2 font-medium text-white">Tampilkan</span>
        <CustomDropdown state={show} setState={setShow} values={showValues} />
      </div>
      {Object.entries(orderItems).map((orderItemKeyValue, index) => {
        const orderItemId = orderItemKeyValue[0];
        const orderItem = orderItemKeyValue[1];
        return (
          <div className="mb-4 pt-2 px-4 bg-white" key={index}>
            <div className="pb-2 flex items-start justify-between">
              <p className="flex-none text-sm font-medium">
                {formatDate(orderItem.date)}
              </p>
              <div
                className={
                  (orderItem.status === "done" ? "" : "bg-blue-light ") +
                  "flex-none py-0 px-2 text-sm font-normal blue-btn"
                }
              >
                {translateStatusToIn(orderItem.status)}
              </div>
            </div>
            <div className="[&>*]:py-2 divide-y-2 divide-blue-light">
              <div>
                <p className="font-medium">Pembeli:</p>
                <p className="text-sm">{orderItem.name}</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium text-sm">
                  Alamat Tujuan:
                </p>
                <p className="leading-4 text-sm">{orderItem.address}</p>
              </div>
              <div>
                <table className="[&>*>*>*]:font-normal [&>*>*>*]:text-sm [&>*>*>*:nth-child(2)]:pl-4 table-auto border-spacing-14 text-left">
                  <tbody>
                    <tr>
                      <th>Email:</th>
                      <th>{orderItem.email}</th>
                    </tr>
                    <tr>
                      <th>No. Telepon:</th>
                      <th>{orderItem.phone}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="font-medium">Pesanan:</p>
                <div className="divide-y-2 divide-blue-light">
                  {orderItem.order.map((item, index) => (
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
                  <p className="text-sm">Subtotal</p>
                  <p className="text-sm font-medium">Rp. {orderItem.price}</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Status:</p>
                <div className="flex items-center justify-start">
                  <CustomDropdown
                    state={translateStatusToIn(
                      orderItemsTemporaryStatus[orderItemId]
                    )}
                    setState={(status) => {
                      setOrderItemsTemporaryStatus({
                        ...orderItemsTemporaryStatus,
                        [orderItemId]: translateStatusToEng(status),
                      });
                    }}
                    values={[
                      ...orderItemStatusValues.map((status) =>
                        translateStatusToIn(status)
                      ),
                    ]}
                  />
                  <button
                    className="ml-4 py-0 text-sm blue-btn-inverted"
                    onClick={() => {
                      setOrderItems({
                        ...orderItems,
                        [orderItemId]: {
                          ...orderItems[orderItemId],
                          status: orderItemsTemporaryStatus[orderItemId],
                        },
                      });
                    }}
                  >
                    Perbarui Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default order;
