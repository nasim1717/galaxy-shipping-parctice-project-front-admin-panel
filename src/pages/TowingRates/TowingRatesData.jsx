import { useEffect, useState } from "react";
import { useGetTowingRatesQuery } from "../../features/towinRates/towingRatesApi";
import TowingRateSearchRow from "./TowingRateSearchRow";
import Loader from "../../components/Loader/Loader";
import NoRecordData from "../../components/Loader/NoRecordData";
import Error from "../../components/Loader/Error";
import TowingRatesDataShow from "./TowingRatesDataShow";
import { useDispatch, useSelector } from "react-redux";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import { GoTriangleUp } from "react-icons/go";

const TowingRatesData = () => {
  const dispatch = useDispatch();
  const [towingRatesDatas, setTowingRatesDatas] = useState(<Loader></Loader>);
  const [sortStart, setSortStart] = useState(false);
  const [sortName, setSortName] = useState(false);
  const [sortColumName, setSortColumName] = useState("");
  const currentPage = useSelector((state) => state.pagination.curentPage);
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const towingRateSearch = useSelector((state) => state.towingRateSlice.towingRateSearch);
  const {
    data: towingRates,
    isFetching,
    isError,
  } = useGetTowingRatesQuery({
    currentPage,
    dataLimit,
    towingRateSearch,
    sortStart,
    sortColumName,
    sortName,
  });

  useEffect(() => {
    if (isFetching) {
      setTowingRatesDatas(<Loader />);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setTowingRatesDatas(<Error />);
    }
  }, [isError]);

  useEffect(() => {
    if (towingRates?.data) {
      if (towingRates.data.length === 0) {
        setTowingRatesDatas(<NoRecordData></NoRecordData>);
      } else {
        let serial = towingRates.from;
        const content = towingRates.data.map((item, index) => (
          <TowingRatesDataShow
            key={item.id}
            towing={item}
            index={index}
            serial={serial++}
          ></TowingRatesDataShow>
        ));
        setTowingRatesDatas(content);
      }
      dispatch(
        dataLimitInfo({
          from: towingRates.from,
          to: towingRates.to,
          items: towingRates.total,
        })
      );
      dispatch(totalPage(towingRates?.last_page));
    }
  }, [
    towingRates,
    towingRates?.from,
    towingRates?.to,
    towingRates?.total,
    towingRates?.last_page,
    dispatch,
  ]);
  return (
    <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
      <div>
        <table className="text-sm text-left w-full ">
          <thead className="">
            <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
              <th className="px-4 py-3">SL</th>
              <th
                onClick={() => {
                  setSortName(!sortName);
                  setSortStart(true);
                  setSortColumName("rate");
                }}
                className="px-4 underline cursor-pointer"
              >
                <div className="flex  items-center gap-x-1">
                  <span>Rate</span>
                  {sortColumName === "rate" && (
                    <GoTriangleUp className={`text-lg ${sortName && "rotate-180"}`}></GoTriangleUp>
                  )}
                </div>
              </th>
              <th className="px-4">Country</th>
              <th className="px-4">State</th>
              <th className="px-4">City</th>
              <th className="px-4">Yard</th>
              <th className="px-4">Status</th>
              <th className="">Action</th>
              <th className="px-1"></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <TowingRateSearchRow></TowingRateSearchRow>
            {towingRatesDatas}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TowingRatesData;
