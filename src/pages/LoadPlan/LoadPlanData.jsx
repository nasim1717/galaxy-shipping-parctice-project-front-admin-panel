import { useEffect, useState } from "react";
import { useGetLoadPlanQuery } from "../../features/loadPlan/loadPlanApi";
import LoadPlanSearchRow from "./LoadPlanSearchRow";
import Loader from "../../components/Loader/Loader";
import NoRecordData from "../../components/Loader/NoRecordData";
import LoadPlanDataShow from "./LoadPlanDataShow";
import Error from "../../components/Loader/Error";
import { useDispatch, useSelector } from "react-redux";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import { GoTriangleUp } from "react-icons/go";

const LoadPlanData = () => {
  const dispatch = useDispatch();
  const [sortStart, setSortStart] = useState(false);
  const [sortName, setSortName] = useState(false);
  const [sortColumName, setSortColumName] = useState("");
  const [loadPlansDatas, setLoadPlansDatas] = useState(<Loader></Loader>);
  const currentPage = useSelector((state) => state.pagination.curentPage);
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const loadPlanSearch = useSelector((state) => state.loadPlanSlice.loadPlanSearch);
  const loadPlanGlobalSearch = useSelector((state) => state.loadPlanSlice.loadPlanGlobalSearch);
  const loadPlanGlobalSearchOnOf = useSelector(
    (state) => state.loadPlanSlice.loadPlanGlobalSearchOn
  );

  const {
    data: loadPlans,
    isFetching,
    isError,
  } = useGetLoadPlanQuery({
    currentPage,
    dataLimit,
    loadPlanSearch,
    loadPlanGlobalSearch,
    loadPlanGlobalSearchOnOf,
    sortStart,
    sortName,
    sortColumName,
  });

  useEffect(() => {
    if (isFetching) {
      setLoadPlansDatas(<Loader></Loader>);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setLoadPlansDatas(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    if (loadPlans?.data) {
      if (loadPlans?.data.length === 0) {
        setLoadPlansDatas(<NoRecordData></NoRecordData>);
      } else {
        const content = loadPlans.data.map((item, index) => (
          <LoadPlanDataShow key={item.id} loadPlans={item} index={index}></LoadPlanDataShow>
        ));
        setLoadPlansDatas(content);
        console.log(loadPlans);
      }
      dispatch(
        dataLimitInfo({
          from: loadPlans.from,
          to: loadPlans.to,
          items: loadPlans.total,
        })
      );
      dispatch(totalPage(loadPlans?.last_page));
    }
  }, [loadPlans, loadPlans?.from, loadPlans?.to, loadPlans?.total, loadPlans?.last_page, dispatch]);

  return (
    <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
      <div>
        <table className="text-sm text-left w-full ">
          <thead className="">
            <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
              <th className="py-3 px-4">Info</th>
              <th className="px-4">Customer Name</th>
              <th className="px-4">Plan Number</th>
              <th className="px-4">Export Date</th>
              <th
                onClick={() => {
                  setSortName(!sortName);
                  setSortStart(true);
                  setSortColumName("port_of_loading");
                }}
                className="px-4 underline cursor-pointer"
              >
                <div className="flex  items-center gap-x-1">
                  <span>Port Of Loading</span>
                  {sortColumName === "port_of_loading" && (
                    <GoTriangleUp className={`text-lg ${sortName && "rotate-180"}`}></GoTriangleUp>
                  )}
                </div>
              </th>
              <th className="px-4">Port Of Discharge</th>
              <th className="px-4">Status</th>
              <th className="">Action</th>
              <th className="pr-3"></th>
              <th></th>
              <th className="min-w-[50px]"></th>
            </tr>
          </thead>
          <tbody className="">
            <LoadPlanSearchRow></LoadPlanSearchRow>
            {loadPlansDatas}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadPlanData;
