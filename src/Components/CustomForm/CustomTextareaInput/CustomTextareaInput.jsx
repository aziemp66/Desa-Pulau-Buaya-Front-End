const customTextareaInput = (props) => (
  <div>
    <p className="mb-1 text-sm">{props.name}</p>
    <textarea
      className="focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full min-h-[100px] block rounded-lg border border-blue-light py-2 px-3"
      placeholder={props.placeholder}
      value={props.state}
      onChange={(e) => {
        props.setState(e.target.value);
      }}
    />
  </div>
);

export default customTextareaInput;
