import SearchBtn from "../../components/Buttons/SearchBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { MdApartment } from "react-icons/md";
import { useDispatch } from "react-redux";
import { consigneeGlobalSearch } from "../../features/consignee/consigneeSlice";
import ConsigneeModal from "../../Modals/ConsigneeModal/ConsigneeModal";

const ConsigneeContentHead = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (success) => {
    if (success) {
      toast.success("Consignee Create Successfully");
    }
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(consigneeGlobalSearch(e.target.globalSearch.value));
  };

  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Consginee | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <MdApartment className="text-3xl text-[#1e40af]"></MdApartment>
        <p className="text-lg font-semibold text-[#3f3f46]">Consginee</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            type="text"
            name="globalSearch"
            className="search-input w-72"
            placeholder="Consignee Global Search"
          />
          <SearchBtn
            name="Search"
            icon={<HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>}
          ></SearchBtn>
        </form>
        <div>
          <div onClick={openModal}>
            <AddBtn name="Add Consignee"></AddBtn>
          </div>
        </div>
      </div>
      <ConsigneeModal isOpen={modalIsOpen} onClose={closeModal}></ConsigneeModal>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default ConsigneeContentHead;
