import { useId } from "react";

const customFileInput = (props) => {
  const fileInputId = useId();

  return (
    <div>
      <p className="mb-1 text-sm">{props.title}</p>
      <div>
        <label htmlFor={fileInputId} className="text-sm bg-blue-light blue-btn">
          {props.display}
        </label>
        <input
          id={fileInputId}
          className="hidden"
          name={props.name}
          onChange={(e) => {
            props.setState(e.target.files[0]);
          }}
          type="file"
        />
        <span className="ml-2 text-sm">
          {props.state.name ? props.state.name : "Tidak Ada File Dipilih"}
        </span>
      </div>
    </div>
  );
};

export default customFileInput;
