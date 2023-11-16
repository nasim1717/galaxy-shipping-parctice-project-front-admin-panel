import { CgProfile } from "react-icons/cg";
import SearchBtn from "../../components/Buttons/SearchBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerGlobalSearch } from "../../features/customers/customersSlice";
import CustomersModal from "../../Modals/CustomersModal/CustomersModal";
import { HiMagnifyingGlass } from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const CustomersContentHead = () => {
  const [customersGlobalSearch, setCustomersGlobalSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerGlobalSearch(customersGlobalSearch));
  };

  const openModal = (close, success) => {
    if (success) {
      toast.success("Customers Create Successfully");
    }
    setModalIsOpen(close);
  };

  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Customers | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <CgProfile className="text-3xl text-[#1e40af]"></CgProfile>
        <p className="text-lg font-semibold text-[#3f3f46]">Customers</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            onChange={(e) => setCustomersGlobalSearch(e.target.value)}
            value={customersGlobalSearch}
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
          <span onClick={() => setModalIsOpen(true)}>
            <AddBtn name="Add Customer"></AddBtn>
          </span>
          <CustomersModal modalIsOpen={modalIsOpen} openModal={openModal}></CustomersModal>
        </div>
      </div>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default CustomersContentHead;
