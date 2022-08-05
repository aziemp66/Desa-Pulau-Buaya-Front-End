import { useId, useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomCheckbox from "../../../Components/CustomCheckbox/CustomCheckbox";
import CartItem from "./CartItem/CartItem";

const cartItemReducer = (state, action) => {
  const oldState = state;

  const cartItemId = action.payload.id;
  const name = action.payload.name;
  const price = action.payload.price;
  const checked = action.payload.checked;
  const amount = action.payload.amount;

  switch (action.type) {
    case "add":
      return { ...oldState, [cartItemId]: { name, price, checked, amount } };
    case "changeAmount":
      return { ...oldState, [cartItemId]: { ...oldState[cartItemId], amount } };
    case "changeChecked":
      return {
        ...oldState,
        [cartItemId]: { ...oldState[cartItemId], checked },
      };
    default:
      return oldState;
  }
};

const cart = () => {
  const allCheckedId = useId();
  const [allChecked, setAllChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [cartItemState, cartItemDispatch] = useReducer(cartItemReducer, {});

  //cuma utk development, utk ngasih 4 id di 4 CartItem bawah itu
  const getData = () => {
    const data = [
      {
        id: "23102001",
        name: "Jeruk Segar",
        price: 10000,
        amount: 2,
        checked: true,
      },
      {
        id: "23102003",
        name: "Jeruk Segar",
        price: 10000,
        amount: 1,
        checked: false,
      },
      {
        id: "23102002",
        name: "Jeruk Segar",
        price: 10000,
        amount: 3,
        checked: false,
      },
      {
        id: "23102004",
        name: "Jeruk Segar",
        price: 10000,
        amount: 3,
        checked: false,
      },
    ];

    data.map((item) => {
      cartItemDispatch({
        type: "add",
        payload: {
          id: item.id,
          name: item.name,
          price: item.price,
          amount: item.amount,
          checked: item.checked,
        },
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);
  //utk development selesai

  useEffect(() => {
    let calculatedPrice = 0;

    Object.entries(cartItemState).map((item) => {
      if (item[1].checked || allChecked)
        calculatedPrice += item[1].price * item[1].amount;
    });
    setTotalPrice(calculatedPrice);
  }, [cartItemState, allChecked]);

  return (
    <div className="pb-10 font-inter bg-blue-light">
      <div className="p-4 w-screen">
        <div className="flex flex-row items-center justify-left border-red-500">
          <CustomCheckbox
            state={allChecked}
            setState={setAllChecked}
            id={allCheckedId}
          />
          <label
            className="ml-2 text-sm font-medium text-white"
            htmlFor={allCheckedId}
          >
            Pilih Semua
          </label>
        </div>
      </div>
      <div className="[&>*]:mb-4">
        {Object.entries(cartItemState).map((item, index) => {
          return (
            <CartItem
              key={index}
              itemId={item[0]}
              name={item[1].name}
              price={item[1].price}
              amount={item[1].amount}
              checked={item[1].checked || allChecked}
              setChecked={(checked) => {
                cartItemDispatch({
                  type: "changeChecked",
                  payload: { id: item[0], checked },
                });
              }}
              setAmount={(amount) => {
                cartItemDispatch({
                  type: "changeAmount",
                  payload: { id: item[0], amount },
                });
              }}
            />
          );
        })}
      </div>
      <div className="mx-6 mt-6 p-4 rounded-lg bg-white flex items-center justify-between">
        <div>
          <p className="text-sm font-inter font-semibold text-blue-dark">
            Harga Total:
          </p>
          <span className="mr-2 text-blue-light font-semibold">Rp</span>
          {totalPrice.toLocaleString("id-ID")}
        </div>
        <Link
          className="py-1 px-4 blue-btn-round"
          to="/marketplace/cart/checkout"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default cart;
