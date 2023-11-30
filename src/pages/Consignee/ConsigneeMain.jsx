import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Paginate from "../../components/Paginate/Paginate";
import ConsigneeContentHead from "./ConsigneeContentHead";
import ConsingeeData from "./ConsingeeData";

const ConsigneeMain = () => {
  return (
    <>
      <MainContentHeader>Consignee</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full rounded-md">
          <ConsigneeContentHead></ConsigneeContentHead>
          <ConsingeeData></ConsingeeData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default ConsigneeMain;
