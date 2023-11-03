import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar/Sidebar";
import Navbar from "../pages/shared/Header/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-auto  ">
      <div className="flex ">
        <Sidebar></Sidebar>
        <div className={`flex flex-col w-full relative gap-y-4  ml-5 mr-4 `}>
          <header className="">
            <Navbar></Navbar>
          </header>
          <Outlet></Outlet>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
