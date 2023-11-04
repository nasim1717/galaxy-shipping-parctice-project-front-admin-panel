import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SidebarNavLink = ({ name, icon, styled, nestedMenu, route }) => {
  const sidebarOpen = useSelector((state) => state.sidebars.sidebarOpen);
  const location = useLocation();
  // console.log("location-->", location);

  return (
    <nav className={`mx-3`}>
      <ul>
        <li className={`${styled ? styled : ""}  hover:bg-[#216046] py-2 rounded-md`}>
          <Link to={route} className={`flex items-center  gap-x-4 ${nestedMenu ? "" : "pl-2"}`}>
            {icon}
            <span className={`text-sm ${sidebarOpen ? "hidden" : ""}`}>{name}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavLink;
