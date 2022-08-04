import CheckIcon from "../../Assets/Icons/check-icon.svg?component";

const customCheckbox = (props) => {
  return (
    <button
      className="relative flex items-center justify-center"
      onClick={() => {
        props.setState(!props.state);
      }}
    >
      <input
        id={props.id}
        className="peer w-6 h-6 appearance-none checked:bg-blue-dark bg-white border-2 border-blue-dark rounded-md"
        type="checkbox"
        name="select-all"
        checked={props.state}
        onChange={() => {
          props.setState(!props.state);
        }}
      />
      <CheckIcon className="absolute peer-checked:visible invisible w-6 h-6 left-0 fill-blue-dark" />
    </button>
  );
};

export default customCheckbox;
