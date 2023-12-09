import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Paginate from "../../components/Paginate/Paginate";
import TowingRateContentHeader from "./TowingRateContentHeader";
import TowingRatesData from "./TowingRatesData";

const TowingRatesMain = () => {
  return (
    <>
      <MainContentHeader>Containers</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full rounded-md">
          <TowingRateContentHeader></TowingRateContentHeader>
          <TowingRatesData></TowingRatesData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default TowingRatesMain;
