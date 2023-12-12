import { Helmet } from "react-helmet-async";
import AddBtn from "../../components/Buttons/AddBtn";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { useState } from "react";
import TowingRateModal from "../../Modals/TowingRateModal/TowingRateModal";
import toast, { Toaster } from "react-hot-toast";

const TowingRateContentHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (success) => {
    if (success) {
      toast.success("Consignee Create Successfully");
    }
    setModalIsOpen(false);
  };
  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Towing Rates | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <HiMiniPencilSquare className="text-3xl text-[#1e40af]"></HiMiniPencilSquare>
        <p className="text-lg font-semibold text-[#3f3f46]">Towing Rates</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <div onClick={openModal}>
          <AddBtn name="Add Towing Rates"></AddBtn>
        </div>
      </div>
      <TowingRateModal isOpen={modalIsOpen} onClose={closeModal}></TowingRateModal>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default TowingRateContentHeader;
