import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Paginate from "../../components/Paginate/Paginate";
import ExportsContentHead from "./ExportsContentHead";
import ExportsData from "./ExportsData";

const ExportsMain = () => {
  return (
    <>
      <MainContentHeader>Exports</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full rounded-md">
          <ExportsContentHead></ExportsContentHead>
          <ExportsData></ExportsData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default ExportsMain;
