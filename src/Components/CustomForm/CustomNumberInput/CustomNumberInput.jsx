const customNumberInput = (props) => (
  <div>
    <p className="mb-1 text-sm">{props.name}</p>
    <input
      className="focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full block rounded-lg border border-blue-light py-1 px-3"
      placeholder={props.placeholder}
      type="number"
      value={props.state}
      onChange={(e) => {
        props.setState(e.target.value);
      }}
    />
  </div>
);

export default customNumberInput;
