import { useDispatch, useSelector } from "react-redux";
import { useGetExportsQuery } from "../../features/exports/exportsApi";
import ExportsSearchRow from "./ExportsSearchRow";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Loader/Error";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import NoRecordData from "../../components/Loader/NoRecordData";
import ExportsDataShow from "./ExportsDataShow";

const ExportsData = () => {
  const dispatch = useDispatch();
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const curentPage = useSelector((state) => state.pagination.curentPage);
  const search = useSelector((state) => state.exportsSlice.search);
  const globalSearchOn = useSelector((state) => state.exportsSlice.globalSearchOn);
  const globalSearch = useSelector((state) => state.exportsSlice.globalSearch);
  const [exportsDatas, setExporstsData] = useState(<Loader></Loader>);
  const {
    data: exportsData,
    isFetching,
    isError,
  } = useGetExportsQuery({ curentPage, dataLimit, search, globalSearch, globalSearchOn });

  useEffect(() => {
    if (isFetching) {
      setExporstsData(<Loader></Loader>);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setExporstsData(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    let content;
    if (exportsData?.data) {
      if (exportsData?.data.length === 0) {
        content = <NoRecordData></NoRecordData>;
        setExporstsData(content);
      } else {
        content = exportsData?.data.map((data, index) => (
          <ExportsDataShow key={data.id} exports={data} index={index}></ExportsDataShow>
        ));
        setExporstsData(content);
      }
      dispatch(
        dataLimitInfo({
          to: exportsData?.to,
          from: exportsData?.from,
          items: exportsData?.total,
        })
      );
    }
  }, [exportsData?.data, exportsData?.to, exportsData?.from, exportsData?.total, dispatch]);

  useEffect(() => {
    dispatch(totalPage(exportsData?.last_page));
  }, [exportsData?.last_page, dispatch]);

  return (
    <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
      <div>
        <table className="text-sm text-left w-full ">
          <thead className="">
            <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
              <th className="py-3 px-2  min-w-[150px] ">
                <div className="flex items-center gap-x-1">
                  <span>Container No</span>
                </div>
              </th>
              <th className="px-2  ">
                <div className="flex  items-center gap-x-1 min-w-[150px]">
                  <span>Booking Number</span>
                </div>
              </th>
              <th className="px-2  ">
                <div className="flex  items-center gap-x-1  min-w-[150px]">
                  <span>Customer Name</span>
                </div>
              </th>
              <th className="px-2 min-w-[120px]">Terminal</th>
              <th className="px-2 min-w-[150px]">Vessel</th>
              <th className="px-2 min-w-[120px]">Loading Date</th>
              <th className="px-2 min-w-[120px]">Export Date</th>
              <th className="px-2 min-w-[150px]">Eta</th>
              <th className="px-2 min-w-[150px]">Yard Arrival Date</th>
              <th className="px-2 min-w-[150px]">Port Arrival Date</th>
              <th className="px-2 min-w-[150px]">Status</th>
              <th className="px-2 min-w-[150px]">Note</th>
              <th className="px-2 min-w-[150px]">Shipping Doc</th>
              <th className="px-2">Action</th>
              <th className="px-2"></th>
              <th className="px-2"></th>
            </tr>
          </thead>
          <tbody className="">
            <ExportsSearchRow></ExportsSearchRow>
            {exportsDatas}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExportsData;
