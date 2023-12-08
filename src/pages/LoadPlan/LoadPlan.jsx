import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Paginate from "../../components/Paginate/Paginate";
import LoadPlanContentHead from "./LoadPlanContentHead";
import LoadPlanData from "./LoadPlanData";

const LoadPlan = () => {
  return (
    <>
      <MainContentHeader>Load Plan</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full   rounded-md">
          <LoadPlanContentHead></LoadPlanContentHead>
          <LoadPlanData></LoadPlanData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default LoadPlan;
