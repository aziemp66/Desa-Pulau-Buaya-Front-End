import { useId } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ItemCounter from "../../../../Components/ItemCounter/ItemCounter";
import CustomCheckbox from "../../../../Components/CustomCheckbox/CustomCheckbox";
import RectangleImageContainer from "../../../../Components/RectangleImageContainer/RectangleImageContainer";
import jerukSegar from "../../../../Assets/jerukSegar.jpeg";

const cartItem = (props) => {
  const checkId = useId();

  const link = axios.getUri({
    url: "/marketplace/view",
    params: { id: props.itemId },
  });

  return (
    <div className="p-2 font-inter flex w-screen h-28 bg-white">
      <CustomCheckbox
        className="flex-none"
        id={checkId}
        state={props.checked}
        setState={props.setChecked}
      />
      <Link className="flex-1 flex items-center justify-center" to={link}>
        <div className="flex-1 rounded-lg">
          {/* jalankan ini kalo rectabngle image ny nganeh*/}
          {/* <RectangleImageContainer className="max-w-[80px]" size="80px" image={jerukSegar} /> */}
          <RectangleImageContainer size="80px" image={jerukSegar} />
        </div>
        <div className="flex-1 p-2 bg-white">
          <p className="text-sm text-blue-dark font-medium font-inter">
            {props?.name ? props.name : "Produk Tidak Ditemukan"}
          </p>
          <p className="text-md">
            {props?.price ? "Rp." + props.price.toLocaleString("in-ID") : ""}
          </p>
        </div>
      </Link>
      <div className="flex-none flex items-end justify-center">
        <ItemCounter state={props.amount} setState={props.setAmount} />
      </div>
    </div>
  );
};

export default cartItem;
