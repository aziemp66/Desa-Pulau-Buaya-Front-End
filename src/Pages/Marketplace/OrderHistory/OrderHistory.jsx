import { useState, useEffect } from "react";
import OrderDataBuyer from "../OrderDataBuyer/OrderDataBuyer";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";

//cm utk devlopment
import jerukSegar from "../../../Assets/jerukSegar.jpeg";

const orderHistory = () => {
  const [show, setShow] = useState("Semua");
  const showValues = ["Semua", "Dalam Proses", "Diterima"];

  const [orderItemsLength, setOrderItemsLength] = useState(0);
  const [orderItems, setOrderItems] = useState({});

  const [selectedOrderItems, setSelectedOrderItems] = useState([]);

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
    shipping: 20000,
    price: 70000,
    totalPrice: 90000,
  };

  const data = [
    orderItemExample,
    {
      ...orderItemExample,
      date: new Date(2003, 5, 3),
      id: "2",
      status: "done",
    },
  ];
  //utk development selesai

  const getData = (item) => {
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
        shipping: item.shipping,
        totalPrice: item.totalPrice,
      },
    };

    setOrderItems(newState);
  };

  useEffect(() => {
    try {
      getData(data[orderItemsLength]);
      setOrderItemsLength(orderItemsLength + 1);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      getData(data[orderItemsLength]);
      setOrderItemsLength(orderItemsLength + 1);
      console.log(orderItems);
    } catch {}
  }, [orderItems]);
  useEffect(() => {
    const selected = [];

    Object.entries(orderItems).map((item) => {
      if (translateStatusToIn(item[1].status) === show || show === "Semua") {
        selected.push(item[0]);
      }
    });

    setSelectedOrderItems(selected);
  }, [orderItems, show]);

  const translateStatusToIn = (status) => {
    switch (status) {
      case "done":
        return "Diterima";
      case "ongoing":
        return "Dalam Proses";
      default:
        return "";
    }
  };

  const translateStatusToEng = (status) => {
    switch (status) {
      case "Diterima":
        return "done";
      case "Dalam Proses":
        return "ongoing";
      default:
        return "";
    }
  };

  return (
    <div className="bg-blue-light">
      <div className="max-w-[700px] mx-auto font-inter pb-4">
        <div className="pt-8 pb-4 px-4 flex flex-row">
          <span className="mr-2 font-medium text-white">Tampilkan</span>
          <CustomDropdown state={show} setState={setShow} values={showValues} />
        </div>
        {selectedOrderItems.map((item, index) => {
          return (
            <OrderDataBuyer
              key={index}
              data={orderItems[item]}
              dataId={item}
              showValues={orderItemStatusValues}
              translateStatusToIn={translateStatusToIn}
              translateStatusToEng={translateStatusToEng}
            >
              <div
                className={
                  (orderItems[item].status === "done" ? "" : "bg-blue-light ") +
                  "flex-none py-0 px-2 text-sm font-normal blue-btn"
                }
              >
                {translateStatusToIn(orderItems[item].status)}
              </div>
            </OrderDataBuyer>
          );
        })}
      </div>
    </div>
  );
};

export default orderHistory;
