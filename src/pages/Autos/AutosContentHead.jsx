import { FaCarRear } from "react-icons/fa6";
import SearchBtn from "../../components/Buttons/SearchBtn";
import ExportBtn from "../../components/Buttons/ExportBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { globalSearch } from "../../features/vehicles/vehiclesSlice";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AutosModal from "../../Modals/AutosModal/AutosModal";
import toast, { Toaster } from "react-hot-toast";

const AutosContentHead = () => {
  const [vehiclesGlobalSrc, setVehiclesGlbalSrc] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const diaptch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    diaptch(globalSearch(vehiclesGlobalSrc));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (success) => {
    if (success) {
      toast.success("Autos Create Successfully");
    }
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <div className="flex gap-x-3 items-center">
        <FaCarRear className="text-3xl text-[#1e40af]"></FaCarRear>
        <p className="text-lg font-semibold text-[#3f3f46]">Autos</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            onChange={(e) => setVehiclesGlbalSrc(e.target.value)}
            value={vehiclesGlobalSrc}
            type="text"
            className="search-input w-72"
            placeholder="Autos Global Search"
          />
          <SearchBtn
            name="Search"
            icon={<HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>}
          ></SearchBtn>
        </form>
        <div>
          <ExportBtn name="Export"></ExportBtn>
        </div>
        <div onClick={openModal}>
          <AddBtn name="Add Auto"></AddBtn>
        </div>
      </div>
      <AutosModal isOpen={modalIsOpen} onClose={closeModal} />
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default AutosContentHead;
