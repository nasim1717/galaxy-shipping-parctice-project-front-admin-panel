import SearchBtn from "../../components/Buttons/SearchBtn";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";

import { FiTruck } from "react-icons/fi";

const ContainerContentHead = () => {
  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Containers | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <FiTruck className="text-3xl text-[#1e40af]"></FiTruck>
        <p className="text-lg font-semibold text-[#3f3f46]">Exports</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form className="flex items-center gap-x-2">
          <input type="text" className="search-input w-72" placeholder="Global Search" />
          <SearchBtn
            name="Search"
            icon={<HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>}
          ></SearchBtn>
        </form>
      </div>
    </div>
  );
};

export default ContainerContentHead;
