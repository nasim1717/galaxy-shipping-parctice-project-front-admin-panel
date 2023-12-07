import SearchBtn from "../../components/Buttons/SearchBtn";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";

import { FiTruck } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { containerGlobalSearch } from "../../features/containers/containersSlice";

const ContainerContentHead = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(containerGlobalSearch(e.target.continerGlobal.value));
  };
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
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            type="text"
            name="continerGlobal"
            className="search-input w-72"
            placeholder="Global Search"
          />
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
