import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const MainContentHeader = ({ children }) => {
  return (
    <div className="flex items-center gap-x-2 grd text-[#808191] shadow-lg py-4 px-4 text-sm rounded-md">
      <LiaHomeSolid className="text-lg"></LiaHomeSolid>
      <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
      <p>{children}</p>
    </div>
  );
};

export default MainContentHeader;
