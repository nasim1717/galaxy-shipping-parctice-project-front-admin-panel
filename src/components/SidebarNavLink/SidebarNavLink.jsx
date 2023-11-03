import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SidebarNavLink = ({ name, icon, styled, nestedMenu }) => {
  const sidebarOpen = useSelector((state) => state.sidebars.sidebarOpen);

  return (
    <nav className={`mx-3`}>
      <ul>
        <li className={`${styled ? styled : ""}  hover:bg-[#216046] py-2 rounded-md`}>
          <Link className={`flex items-center  gap-x-4 ${nestedMenu ? "" : "pl-2"}`}>
            {icon}
            <span className={`text-sm ${sidebarOpen ? "hidden" : ""}`}>{name}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavLink;
