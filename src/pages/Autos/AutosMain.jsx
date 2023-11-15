import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import AutosContentHead from "./AutosContentHead";
import AutosData from "./AutosData";
import Paginate from "../../components/Paginate/Paginate";

const AutosMain = () => {
  return (
    <>
      <MainContentHeader>Autos</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full   rounded-md">
          <AutosContentHead></AutosContentHead>
          <AutosData></AutosData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default AutosMain;
