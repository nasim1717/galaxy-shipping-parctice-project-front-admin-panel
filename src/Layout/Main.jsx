import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar/Sidebar";
import Navbar from "../pages/shared/Header/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-auto ">
      <div className="flex relative">
        <Sidebar></Sidebar>
        <div className={`flex flex-col w-full gap-y-4 ml-5 mr-4  `}>
          <header className="sticky top-0 w-full  z-50">
            <Navbar></Navbar>
          </header>
          <Outlet></Outlet>
          <footer className="sticky bottom-1 w-full ">
            <Footer></Footer>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
