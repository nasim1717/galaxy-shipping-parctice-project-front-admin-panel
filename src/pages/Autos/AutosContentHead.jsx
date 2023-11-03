import { FaCarRear } from "react-icons/fa6";
import SearchBtn from "../../components/Buttons/SearchBtn";
import ExportBtn from "../../components/Buttons/ExportBtn";
import AddBtn from "../../components/Buttons/AddBtn";

const AutosContentHead = () => {
  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <div className="flex gap-x-3 items-center">
        <FaCarRear className="text-3xl text-[#1e40af]"></FaCarRear>
        <p className="text-lg font-semibold text-[#3f3f46]">Autos</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form className="flex items-center gap-x-2">
          <input type="text" className="search-input w-72" placeholder="Autos Global Search" />
          <SearchBtn name="Search"></SearchBtn>
        </form>
        <div>
          <ExportBtn name="Export"></ExportBtn>
        </div>
        <div>
          <AddBtn name="Add Auto"></AddBtn>
        </div>
      </div>
    </div>
  );
};

export default AutosContentHead;
