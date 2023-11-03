import { BiFullscreen } from "react-icons/bi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-4 rounded-md text-[#808191] shadow-lg ">
      <div>
        <p className="text-sm">Galaxy Shipping</p>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-5 items-center">
            <li className="nav-btn">
              <MdOutlineLightMode className="text-xl text-center"></MdOutlineLightMode>
            </li>
            <li className="nav-btn">
              <LiaFlagUsaSolid className="text-2xl text-red-500"></LiaFlagUsaSolid>
            </li>
            <li className="nav-btn">
              <BiFullscreen className="text-xl"></BiFullscreen>
            </li>
            <li className="nav-btn relative">
              <div className="flex items-center">
                <PiShoppingCartSimpleDuotone className="text-xl"></PiShoppingCartSimpleDuotone>
                <p className="py-[2px] px-1 rounded-md bg-red-500 text-xs text-center text-white absolute top-0 right-0">
                  0
                </p>
              </div>
            </li>
            <li className="nav-btn">
              <IoMdNotificationsOutline className="text-xl"></IoMdNotificationsOutline>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
