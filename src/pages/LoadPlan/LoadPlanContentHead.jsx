import { Helmet } from "react-helmet-async";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CgRedo } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { loadPlanGlobalSearch } from "../../features/loadPlan/loadPlanSliece";

const LoadPlanContentHead = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadPlanGlobalSearch(e.target.loadPlanGlobalSearch.value));
  };
  return (
    <div className="flex justify-between items-center pb-4  px-4 rounded-md border-b">
      <Helmet>
        <title>Load Plan | Galaxy Shipping</title>
      </Helmet>
      <div className="flex gap-x-3 items-center">
        <CgRedo className="text-3xl text-[#1e40af]"></CgRedo>
        <p className="text-lg font-semibold text-[#3f3f46]">Load Plan</p>
      </div>
      <div className="flex gap-x-1 items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <input
            type="text"
            name="loadPlanGlobalSearch"
            className="search-input w-72"
            placeholder="Load Plan Global Search"
          />
          <SearchBtn
            name="Search"
            icon={<HiMagnifyingGlass className="font-extrabold text-base "></HiMagnifyingGlass>}
          ></SearchBtn>
        </form>
      </div>
    </div>
  );
};

export default LoadPlanContentHead;
