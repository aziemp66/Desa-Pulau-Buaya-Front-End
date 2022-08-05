import { Link } from "react-router-dom";
import CustomFrame from "../../../Components/CustomFrame/CustomFrame";
import OrderDataBuyer from "../OrderDataBuyer/OrderDataBuyer";

//cm utk development
import jerukSegar from "../../../Assets/jerukSegar.jpeg";

const checkout = () => {
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
  //utk development selesai

  const orderItemStatusValues = ["done", "ongoing"];
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
    <div className="pt-6 pb-10 px-2 bg-blue-light">
      <CustomFrame title="Check Out">
        <OrderDataBuyer
          data={{
            date: orderItemExample.date,
            name: orderItemExample.name,
            address: orderItemExample.address,
            status: orderItemExample.status,
            email: orderItemExample.email,
            phone: orderItemExample.phone,
            order: orderItemExample.order,
            price: orderItemExample.price,
            shipping: orderItemExample.shipping,
            totalPrice: orderItemExample.totalPrice,
          }}
          dataId={orderItemExample.id}
          showValues={orderItemStatusValues}
          translateStatusToIn={translateStatusToIn}
          translateStatusToEng={translateStatusToEng}
        />
        <div className="mb-6 px-2 text-sm flex items-center">
          <input
            type="submit"
            value="Bayar Sekarang"
            className="flex-none py-1 w-36 mr-4 blue-btn border-2 border-blue-dark"
          ></input>
          <Link
            to="/marketplace/cart"
            className="flex-none py-1 w-24 blue-btn-inverted"
          >
            Batal
          </Link>
        </div>
      </CustomFrame>
    </div>
  );
};

export default checkout;
