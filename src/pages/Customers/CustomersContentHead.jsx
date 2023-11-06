import { CgProfile } from "react-icons/cg";
import SearchBtn from "../../components/Buttons/SearchBtn";
import AddBtn from "../../components/Buttons/AddBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerGlobalSearch } from "../../features/customers/customersSlice";

const CustomersContentHead = () => {
  const [customersGlobalSearch, setCustomersGlobalSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerGlobalSearch(customersGlobalSearch));
  };

  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
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
          <SearchBtn name="Search"></SearchBtn>
        </form>
        <div>
          <AddBtn name="Add Customer"></AddBtn>
        </div>
      </div>
    </div>
  );
};

export default CustomersContentHead;
