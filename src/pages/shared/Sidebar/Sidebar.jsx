import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import logo from "../../../assets/logo.jpg";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarBodyOpen } from "../../../features/sidebars/sidebarSlice";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    // dispatch(sidebarBodyOpen(!sidebarOpen));
    setSidebarOpen(!sidebarOpen);
  };

  const handleMouseEnter = () => {
    if (sidebarOpen) {
      dispatch(sidebarBodyOpen(false));
      setOpenHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (sidebarOpen) {
      dispatch(sidebarBodyOpen(true));
      setOpenHover(false);
    }
  };

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-[rgb(14,82,54)] ml-3 sticky top-3  mt-3 mb-3 bottom-3 h-[95vh] text-white rounded-md grid grid-cols-1 grid-rows-1 overflow-hidden  ${
        sidebarOpen && !openHover ? "min-w-[70px] " : "min-w-[200px]"
      }`}
    >
      <div className="mt-3 flex flex-col">
        {/* sidebar head start */}
        <div className="mx-3">
          <div className="flex gap-6 mx-auto">
            <div className={`w-[65%] ${sidebarOpen && !openHover && "hidden"}`}>
              <img src={logo} alt="" className="h-12 w-full" />
            </div>
            <button
              onClick={handleSidebar}
              className={`w-9 h-9 ml-2 mr-1 self-center bg-[#216046] rounded-full ${
                sidebarOpen && "hidden"
              }`}
            >
              <BiArrowToLeft className="text-3xl"></BiArrowToLeft>
            </button>
            <button
              onClick={handleSidebar}
              className={`w-9 h-9 ml-2 mr-1 self-center bg-[#216046] rounded-full ${
                !sidebarOpen && "hidden"
              }`}
            >
              <BiArrowToRight className="text-3xl"></BiArrowToRight>
            </button>
          </div>
        </div>
        <SidebarBody></SidebarBody>
        <SidebarFooter></SidebarFooter>
      </div>
    </aside>
  );
};

export default Sidebar;
