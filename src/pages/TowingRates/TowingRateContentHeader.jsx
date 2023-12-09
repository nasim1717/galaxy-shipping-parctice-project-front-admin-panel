import { Helmet } from "react-helmet-async";
import AddBtn from "../../components/Buttons/AddBtn";
import { HiMiniPencilSquare } from "react-icons/hi2";

const TowingRateContentHeader = () => {
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
        <div>
          <AddBtn name="Add Towing Rates"></AddBtn>
        </div>
      </div>
    </div>
  );
};

export default TowingRateContentHeader;
