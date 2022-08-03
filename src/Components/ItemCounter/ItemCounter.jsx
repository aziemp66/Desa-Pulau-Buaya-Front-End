import PlusIcon from "../../Assets/Icons/plus-icon.svg?component";
import MinusIcon from "../../Assets/Icons/minus-icon.svg?component";

const itemCounter = (props) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-2 w-7 h-7 flex-none bg-blue-dark rounded-md flex items-center justify-center"
        onClick={() => {
          if (props.state > 0) props.setState(props.state - 1);
        }}
      >
        <MinusIcon className="w-7 h-7" />
      </button>
      <input
        className="flex-none w-12 text-center rounded-md border-2 border-blue-dark"
        type="number"
        value={props.state}
        onChange={(e) => {
          props.setState(parseInt(e.target.value, 10));
        }}
      />
      <button
        className="ml-2 w-7 h-7 flex-none bg-blue-dark rounded-md flex items-center justify-center"
        onClick={() => {
          props.setState(props.state + 1);
        }}
      >
        <PlusIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default itemCounter;
