import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Paginate from "../../components/Paginate/Paginate";
import CustomersContentHead from "./CustomersContentHead";
import CustomersData from "./CustomersData";

const CustomersMain = () => {
  return (
    <>
      <MainContentHeader>Customer</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-11 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full rounded-md">
          <CustomersContentHead></CustomersContentHead>
          <CustomersData></CustomersData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default CustomersMain;
