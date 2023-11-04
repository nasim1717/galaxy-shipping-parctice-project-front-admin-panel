import adminLogo from "../../../assets/adminpic.jpg";
import SidebarNavLink from "../../../components/SidebarNavLink/SidebarNavLink";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarPrice } from "../../../features/sidebars/sidebarSlice";
const SidebarFooter = () => {
  const dispatch = useDispatch();
  const [sidebarFooterOnOff, setSidebarFooterOnOff] = useState(false);
  const styled = sidebarFooterOnOff ? "bg-[#216046]" : "";

  const handleSidebarFooter = () => {
    dispatch(sidebarPrice(!sidebarFooterOnOff));
    setSidebarFooterOnOff(!sidebarFooterOnOff);
  };

  return (
    <div className={`pt-2 ${!sidebarFooterOnOff ? "absolute -bottom-[11px]  w-full" : ""}`}>
      <hr className="mx-auto border-1 w-1/2 " />
      <div
        onClick={handleSidebarFooter}
        className={` rounded-md ${!sidebarFooterOnOff ? "bg-[#216046] " : ""}`}
      >
        <SidebarNavLink
          styled={styled}
          name={
            <div>
              <p className="text-sm underline decoration-dotted">Izharulhak</p>
              <p className="text-[10px] underline decoration-dotted">Master Admin</p>
            </div>
          }
          icon={<img src={adminLogo} alt="" className="w-9 h-9 rounded-md" />}
        ></SidebarNavLink>
      </div>
      <div
        className={`flex flex-col space-y-3 mt-3  transition-all duration-700 ease-linear ${
          sidebarFooterOnOff ? "max-h-96 mb-3" : "max-h-0 "
        }`}
      >
        <SidebarNavLink
          name={"Profile"}
          icon={<CgProfile className="text-lg"></CgProfile>}
        ></SidebarNavLink>
        <SidebarNavLink
          name={"Ligth Mode"}
          icon={<MdOutlineLightMode className="text-lg text-[#fde047]"></MdOutlineLightMode>}
        ></SidebarNavLink>
        <hr className="border-[#e2e8f0] border-1" />
        <SidebarNavLink
          name={"Logout"}
          icon={<HiArrowRightOnRectangle className="text-lg"></HiArrowRightOnRectangle>}
        ></SidebarNavLink>
      </div>
    </div>
  );
};

export default SidebarFooter;
