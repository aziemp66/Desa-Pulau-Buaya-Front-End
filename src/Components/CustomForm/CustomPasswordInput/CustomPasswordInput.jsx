import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const customPasswordInput = (props) => (
  <div>
    <p className="mb-1 text-sm">{props.name}</p>
    <div className="flex-1 relative">
      <div className="[&>*>*]:w-6 [&>*>*]:h-6 [&>*>*]:fill-slate-400 absolute inset-y-0 right-0 mr-2 flex items-center">
        {props.showState ? (
          <button
            onClick={() => {
              props.setShowState(false);
            }}
          >
            <AiFillEye />
          </button>
        ) : (
          <button
            onClick={() => {
              props.setShowState(true);
            }}
          >
            <AiFillEyeInvisible />
          </button>
        )}
      </div>
      <input
        className="focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full block rounded-lg border border-blue-light py-1 pl-3 pr-12"
        placeholder={props.placeholder}
        type={props.showState ? "text" : "password"}
        value={props.state}
        onChange={(e) => {
          props.setState(e.target.value);
        }}
      />
    </div>
  </div>
);

export default customPasswordInput;
