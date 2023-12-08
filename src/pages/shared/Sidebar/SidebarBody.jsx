import { BiGridAlt } from "react-icons/bi";
import SidebarNavLink from "../../../components/SidebarNavLink/SidebarNavLink";
import {
  MdAddShoppingCart,
  MdKeyboardArrowRight,
  MdApartment,
  MdOutlineHealthAndSafety,
  MdAttachMoney,
} from "react-icons/md";
import { CgProfile, CgRedo } from "react-icons/cg";
import { RiTaxiLine } from "react-icons/ri";
import { HiArrowsUpDown, HiMiniPencilSquare } from "react-icons/hi2";
import { BsTruck, BsStopwatch } from "react-icons/bs";
import { GiGate } from "react-icons/gi";
import { TbChartBar } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

const SidebarBody = () => {
  const [settingsOnOff, setSettingsOnOff] = useState(false);
  const [pricingOnOff, setPricingOnOff] = useState(false);
  const sidebarFooterOnOf = useSelector((state) => state.sidebars.sidebarFooter);
  const sidebarOpen = useSelector((state) => state.sidebars.sidebarOpen);
  const nestedMenu = sidebarOpen || false;

  return (
    <div
      className={`${
        (pricingOnOff && !sidebarFooterOnOf) ||
        (settingsOnOff && !sidebarFooterOnOf) ||
        (!settingsOnOff && !sidebarFooterOnOf)
          ? "mb-16"
          : ""
      } mt-4 flex flex-col space-y-3 h-full overflow-y-scroll hide-scroolbar `}
    >
      <SidebarNavLink
        route="/"
        name="Dashboard"
        icon={<BiGridAlt className="text-lg"></BiGridAlt>}
      ></SidebarNavLink>
      <hr className="border-[rgba(231,238,231,.6)] border-1" />
      <SidebarNavLink
        route="/customers"
        name="Customers"
        icon={<CgProfile className="text-lg"></CgProfile>}
      ></SidebarNavLink>
      <SidebarNavLink
        route="/consignees"
        name="Consignee"
        icon={<MdApartment className="text-lg"></MdApartment>}
      ></SidebarNavLink>
      <SidebarNavLink
        route="/vehicles"
        name="Autos"
        icon={<RiTaxiLine className="text-lg"></RiTaxiLine>}
      ></SidebarNavLink>
      <SidebarNavLink
        route="/exports"
        name="Export"
        icon={<HiArrowsUpDown className="text-lg"></HiArrowsUpDown>}
      ></SidebarNavLink>
      <SidebarNavLink
        route="/containers"
        name="Containers"
        icon={<BsTruck className="text-lg"></BsTruck>}
      ></SidebarNavLink>
      <SidebarNavLink
        route="/"
        name="Gate pass"
        icon={<GiGate className="text-lg"></GiGate>}
      ></SidebarNavLink>
      <nav onClick={() => setPricingOnOff(!pricingOnOff)} className="mx-3">
        <ul>
          <li className={`${pricingOnOff && "bg-[#216046]"} hover:bg-[#216046] py-2 rounded-md`}>
            <div className={`flex items-center pl-2  ${sidebarOpen ? "" : "gap-x-4"}`}>
              <MdAddShoppingCart className="text-lg"></MdAddShoppingCart>
              <span className={`text-sm ${sidebarOpen ? "hidden" : ""}`}>Pricing</span>
              <MdKeyboardArrowRight
                className={`text-lg  ${
                  pricingOnOff ? "transition rotate-90  duration-500" : "transition   duration-500"
                } ${sidebarOpen ? "" : "ml-12"}`}
              ></MdKeyboardArrowRight>
            </div>
          </li>
          <ul
            className={`overflow-hidden transition-all  duration-700 ease-in-out ${
              pricingOnOff ? "max-h-[500px]" : "max-h-0 "
            }`}
          >
            <li className={`space-y-3 mt-1 `}>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Towing Rate"
                icon={<HiMiniPencilSquare className="text-lg"></HiMiniPencilSquare>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Shipping Rate"
                icon={<TbChartBar className="text-lg"></TbChartBar>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Clearance Rate"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Price Inquiry"
                icon={<MdAttachMoney className="text-lg"></MdAttachMoney>}
              ></SidebarNavLink>
            </li>
          </ul>
        </ul>
      </nav>
      <SidebarNavLink
        route="/load-plans"
        name="Load plan"
        icon={<CgRedo className="text-lg"></CgRedo>}
      ></SidebarNavLink>
      <hr className="border-[rgba(231,238,231,.6)] border-1" />
      <p
        className={`ml-4 text-[#216046] text-[rgba(231,238,231,.6)] ${sidebarOpen ? "hidden" : ""}`}
      >
        setting
      </p>
      <nav onClick={() => setSettingsOnOff(!settingsOnOff)} className="mx-3">
        <ul>
          <li className={`${settingsOnOff && "bg-[#216046]"} hover:bg-[#216046] py-2 rounded-md`}>
            <div className={`flex items-center pl-2  ${sidebarOpen ? "" : "gap-x-4"}`}>
              <AiOutlineSetting className="text-lg"></AiOutlineSetting>
              <span className={`text-sm ${sidebarOpen ? "hidden" : ""}`}>Settings</span>
              <MdKeyboardArrowRight
                className={`text-lg  ${
                  settingsOnOff ? "transition rotate-90  duration-500" : "transition   duration-500"
                } ${sidebarOpen ? "" : "ml-10"}`}
              ></MdKeyboardArrowRight>
            </div>
          </li>
          <ul
            className={`overflow-hidden transition-all  duration-700 ease-in-out ${
              settingsOnOff ? "max-h-[500px]" : "max-h-0 "
            }`}
          >
            <li className={`space-y-3 mt-1 `}>
              {" "}
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="User"
                icon={<CgProfile className="text-lg"></CgProfile>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Role"
                icon={<IoMdLock className="text-lg"></IoMdLock>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Country"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="State"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="City"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Yard"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Port"
                icon={<MdOutlineHealthAndSafety className="text-lg"></MdOutlineHealthAndSafety>}
              ></SidebarNavLink>
              <SidebarNavLink
                route="/"
                nestedMenu={nestedMenu}
                name="Audit Log"
                icon={<BsStopwatch className="text-lg"></BsStopwatch>}
              ></SidebarNavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarBody;
