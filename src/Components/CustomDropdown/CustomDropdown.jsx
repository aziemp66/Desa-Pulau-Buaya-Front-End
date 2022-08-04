import { useState } from "react";
import ChevronDown from "../../Assets/Icons/chevron-down.svg?component";
import ChevronUp from "../../Assets/Icons/chevron-up.svg?component";

const customDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <button
        className="w-[150px] flex items-center justify-between font-inter border-2 border-blue-dark h-6 bg-white text-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="pl-2">{props.state}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className="relative">
        <div className="absolute top-0 left-0">
          {open &&
            props.values.map((value, index) => (
              <button
                key={index}
                className="w-[150px] flex items-center justify-between font-inter border border-blue-light h-6 bg-white text-center"
                onClick={() => {
                  props.setState(value);
                  setOpen(false);
                }}
              >
                <span className="pl-2">{value}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default customDropdown;
