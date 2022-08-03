import { Link } from "react-router-dom";
import axios from "axios";

const card = () => {
  const props = {
    id: 23102003,
    name: "Jeruk Segar",
    image: "./src/Assets/jerukSegar.jpeg",
    price: 10000,
  };

  const link = axios.getUri({
    url: "/marketplace/view",
    params: { id: props.id },
  });

  return (
    <Link
      className="flex flex-col overflow-hidden h-44 rounded-xl shadow-md"
      to={link}
    >
      <div
        className={`flex-1 w-full bg-cover bg-no-repeat bg-center bg-[image:url('${props.image}')]`}
      />
      <div className="flex-none h-14 w-full p-2 bg-white">
        <p className="text-sm text-blue-dark font-medium font-inter">
          {props.name}
        </p>
        <p className="text-md font-mulish">
          Rp. {props.price.toLocaleString("in-ID")}
        </p>
      </div>
    </Link>
  );
};

export default card;
