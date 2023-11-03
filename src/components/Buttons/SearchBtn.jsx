import { HiMagnifyingGlass } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const SearchBtn = ({ name }) => {
  return (
    <button className="btn hover:bg-[#216046]">
      <HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>
      <span>{name}</span>
    </button>
  );
};

export default SearchBtn;
