import SearchBtn from "../../components/Buttons/SearchBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import ExportsModal from "../../Modals/ExportsModal/ExportsModal";
import toast, { Toaster } from "react-hot-toast";
import { MdApartment } from "react-icons/md";

const ConsigneeContentHead = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (success) => {
    if (success) {
      toast.success("Exports Create Successfully");
    }
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <input type="text" className="search-input w-72" placeholder="Consignee Global Search" />
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
      <ExportsModal isOpen={modalIsOpen} onClose={closeModal}></ExportsModal>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default ConsigneeContentHead;
