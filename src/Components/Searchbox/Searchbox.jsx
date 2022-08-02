import SearchIcon from "../../Assets/searchIcon.svg?component";
import FilterIcon from "../../Assets/filterIcon.svg?component";

const searchbox = () => {
  return (
    <div className="flex items-center">
      <label className="flex-1 relative block">
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <SearchIcon className="fill-blue-dark h-4" />
        </span>
        <input
          className="placeholder:text-slate-400 placeholder:text-sm placeholder:font-noto-sans w-full block rounded-full border border-blue-dark py-1 pl-9 pr-3"
          placeholder="Cari Produk..."
          type="text"
          name="search"
        />
      </label>
      <FilterIcon className="ml-2 h-8 fill-blue-dark" />
    </div>
  );
};

export default searchbox;
