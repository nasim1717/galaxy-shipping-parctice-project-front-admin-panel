import SearchBtn from "../../components/Buttons/SearchBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { LuArrowUpDown } from "react-icons/lu";
import { globalSearch } from "../../features/exports/exportsSlice";
import ExportsModal from "../../Modals/ExportsModal/ExportsModal";

const ExportsContentHead = () => {
  const [exportsGlobalSearch, setExportsGlobalSearch] = useState("");
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(globalSearch(exportsGlobalSearch));
  };

  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Exports | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <LuArrowUpDown className="text-3xl text-[#1e40af]"></LuArrowUpDown>
        <p className="text-lg font-semibold text-[#3f3f46]">Exports</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            onChange={(e) => setExportsGlobalSearch(e.target.value)}
            value={exportsGlobalSearch}
            type="text"
            className="search-input w-72"
            placeholder="Exports Global Search"
          />
          <SearchBtn
            name="Search"
            icon={<HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>}
          ></SearchBtn>
        </form>
        <div>
          <span onClick={openModal}>
            <AddBtn name="Add export"></AddBtn>
          </span>
          <ExportsModal isOpen={modalIsOpen} onClose={closeModal}></ExportsModal>
        </div>
      </div>
    </div>
  );
};

export default ExportsContentHead;
