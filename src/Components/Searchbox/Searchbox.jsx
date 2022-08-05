import SearchIcon from "../../Assets/Icons/searchIcon.svg?component";

const searchbox = (props) => {
  return (
    <label className="flex-1 relative block">
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <SearchIcon className="fill-blue-dark h-4" />
      </span>
      <input
        className="focus:outline-blue-dark focus:ring-1 placeholder:text-slate-400 placeholder:text-sm placeholder:font-inter w-full block rounded-full border border-blue-dark py-1 pl-8 pr-3"
        placeholder="Cari Produk..."
        type="text"
        name="search"
        value={props.state}
        onChange={(e) => {
          props.setState(e.target.value);
        }}
      />
    </label>
  );
};

export default searchbox;
