import { useEffect, useState } from "react";
import ContainersSearchRow from "./ContainersSearchRow";
import Loader from "../../components/Loader/Loader";
import { useGetContainersQuery } from "../../features/containers/containersApi";
import NoRecordData from "../../components/Loader/NoRecordData";
import ContainersDataShow from "./ContainersDataShow";
import Error from "../../components/Loader/Error";
import { useDispatch, useSelector } from "react-redux";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import { GoTriangleUp } from "react-icons/go";

const ContainersData = () => {
  const [containsersDatas, setContainersDatas] = useState(<Loader></Loader>);
  const [sortStart, setSortStart] = useState(false);
  const [sortName, setSortName] = useState(false);
  const [sortColumName, setSortColumnName] = useState("");
  const curentPage = useSelector((state) => state.pagination.curentPage);
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const containerSearch = useSelector((state) => state.containerSlice.containerSearch);
  const containerGlobalSearch = useSelector((state) => state.containerSlice.containerGlobalSearch);
  const containerGlobalSearchOnOf = useSelector(
    (state) => state.containerSlice.containerGlobalSearchOn
  );
  const {
    data: containerData,
    isFetching,
    isError,
  } = useGetContainersQuery({
    curentPage,
    dataLimit,
    containerSearch,
    containerGlobalSearch,
    containerGlobalSearchOnOf,
    sortStart,
    sortName,
    sortColumName,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetching) {
      setContainersDatas(<Loader></Loader>);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setContainersDatas(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    if (containerData?.data) {
      if (containerData.data.length === 0) {
        setContainersDatas(<NoRecordData></NoRecordData>);
      } else {
        let serial = containerData.from;
        const content = containerData.data.map((item, index) => (
          <ContainersDataShow
            key={item.id}
            container={item}
            index={index}
            serial={serial++}
          ></ContainersDataShow>
        ));
        setContainersDatas(content);
      }
      dispatch(
        dataLimitInfo({
          from: containerData.from,
          to: containerData.to,
          items: containerData.total,
        })
      );
      dispatch(totalPage(containerData?.last_page));
    }
  }, [
    containerData?.data,
    containerData?.from,
    containerData?.to,
    containerData?.total,
    containerData?.last_page,
    dispatch,
  ]);

  return (
    <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
      <div>
        <table className="text-sm text-left w-full ">
          <thead className="">
            <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
              <th className="py-3 px-4">SL</th>
              <th className="px-4 min-w-[120px]">Loading Date</th>
              <th className="px-4 min-w-[120px]">Export Date</th>
              <th
                onClick={() => {
                  setSortName(!sortName);
                  setSortStart(true);
                  setSortColumnName("eta");
                }}
                className="px-4 min-w-[120px] underline cursor-pointer"
              >
                <div className="flex  items-center gap-x-1">
                  <span>ETA</span>
                  {sortColumName === "eta" && (
                    <GoTriangleUp className={`text-lg ${sortName && "rotate-180"}`}></GoTriangleUp>
                  )}
                </div>
              </th>
              <th
                onClick={() => {
                  setSortName(!sortName);
                  setSortStart(true);
                  setSortColumnName("booking_number");
                }}
                className="px-4 min-w-[120px] underline cursor-pointer"
              >
                <div className="flex  items-center gap-x-1">
                  <span>Booking Number</span>
                  {sortColumName === "booking_number" && (
                    <GoTriangleUp className={`text-lg ${sortName && "rotate-180"}`}></GoTriangleUp>
                  )}
                </div>
              </th>
              <th
                onClick={() => {
                  setSortName(!sortName);
                  setSortStart(true);
                  setSortColumnName("container_number");
                }}
                className="px-4 min-w-[120px] underline cursor-pointer"
              >
                <div className="flex  items-center gap-x-1">
                  <span>Container Number</span>
                  {sortColumName === "container_number" && (
                    <GoTriangleUp className={`text-lg ${sortName && "rotate-180"}`}></GoTriangleUp>
                  )}
                </div>
              </th>
              <th className="px-4 ">Terminal</th>
              <th className="px-4 ">Vessel</th>
              <th className="px-4 ">Destination</th>
              <th className="px-4 ">Note</th>
              <th className="px-1">View</th>
              <th className="min-w-[120px]"></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <ContainersSearchRow></ContainersSearchRow>
            {containsersDatas}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContainersData;
