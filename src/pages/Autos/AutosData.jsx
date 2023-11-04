import AutosDataShow from "./AutosDataShow";
import { useGetVehiclesQuery } from "../../features/vehicles/vehiclesApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import Loader from "../../components/Loader/Loader";
import AutosSearchRow from "./AutosSearchRow";
import { GoTriangleUp } from "react-icons/go";
import NoRecordData from "../../components/Loader/NoRecordData";
import Error from "../../components/Loader/Error";

const AutosData = () => {
  const dispatch = useDispatch();
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const curentPage = useSelector((state) => state.pagination.curentPage);
  const search = useSelector((state) => state.vehicles.search);
  const globalSearchOn = useSelector((state) => state.vehicles.globalSearchOn);
  const globalSearch = useSelector((state) => state.vehicles.globalSearch);
  const [vehiclesAllDatas, setVehiclesAllDatas] = useState(<Loader></Loader>);
  const [sortStart, setSortStart] = useState(false);
  const [sorted, setSorted] = useState({ sorted: false, ordBy: null });

  const { data: vehiclesDatas, isError } = useGetVehiclesQuery({
    page: curentPage,
    limit: dataLimit,
    sortStart,
    sorted,
    search,
    globalSearch,
    globalSearchOn,
  });

  useEffect(() => {
    setVehiclesAllDatas(<Loader></Loader>);
  }, [dataLimit, curentPage, sorted, search, globalSearchOn, globalSearch]);

  useEffect(() => {
    if (isError) {
      setVehiclesAllDatas(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    let content;
    if (vehiclesDatas?.data) {
      if (vehiclesDatas?.data.length === 0) {
        content = <NoRecordData></NoRecordData>;
        setVehiclesAllDatas(content);
      } else {
        content = vehiclesDatas?.data.map((vehicles, index) => (
          <AutosDataShow key={vehicles.id} vehicles={vehicles} index={index}></AutosDataShow>
        ));
        setVehiclesAllDatas(content);
      }
      dispatch(
        dataLimitInfo({
          to: vehiclesDatas?.to,
          from: vehiclesDatas?.from,
          items: vehiclesDatas?.total,
        })
      );
    }
  }, [vehiclesDatas?.data]);

  useEffect(() => {
    dispatch(totalPage(vehiclesDatas?.last_page));
  }, [vehiclesDatas?.last_page, dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1   overflow-auto px-4  h-[52vh]  pt-4">
        <div>
          <table className="text-sm text-left w-full  ">
            <thead className="">
              <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
                <th className="py-3 px-4">Add</th>
                <th>Image</th>
                <th className="px-4">Customer Name</th>
                <th
                  onClick={() => {
                    setSorted({ sorted: !sorted.sorted, ordBy: "lot_number" });
                    setSortStart(true);
                  }}
                  className="px-4 underline "
                >
                  <div className="flex  items-center gap-x-1">
                    <span>Lot Number</span>
                    <GoTriangleUp
                      className={`${
                        sortStart && sorted.ordBy === "lot_number" ? "block" : "hidden"
                      } ${!sorted.sorted && "rotate-180"} text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setSorted({ sorted: !sorted.sorted, ordBy: "vin" });
                    setSortStart(true);
                  }}
                  className="px-4 underline "
                >
                  <div className="flex  items-center gap-x-1 ">
                    <span> VIN</span>
                    <GoTriangleUp
                      className={`${sortStart && sorted.ordBy === "vin" ? "block" : "hidden"} ${
                        !sorted.sorted && "rotate-180"
                      } text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setSorted({ sorted: !sorted.sorted, ordBy: "year" });
                    setSortStart(true);
                  }}
                  className="px-4 underline"
                >
                  <div className="flex  items-center gap-x-1 ">
                    <span>Year</span>
                    <GoTriangleUp
                      className={`${sortStart && sorted.ordBy === "year" ? "block" : "hidden"} ${
                        !sorted.sorted && "rotate-180"
                      } text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th className="px-4">Make</th>
                <th className="px-4">Model</th>
                <th className="px-4 min-w-[150px]">Purchase Date</th>
                <th className="px-4">Deliver Date</th>
                <th className="px-4">Keys</th>
                <th className="px-4">Yard</th>
                <th className="px-4">Auction</th>
                <th className="px-4">Container</th>
                <th className="px-4">Status</th>
                <th className="px-4">Title</th>
                <th className="px-4 min-w-[150px]">Service Provider</th>
                <th className="px-4">Chat</th>
                <th className="px-4 min-w-[150px]">Note</th>
                <th>Action</th>
                <th></th>
                <th></th>
                <th className="min-w-[150px]"></th>
                <th className="min-w-[150px]"></th>
              </tr>
            </thead>
            <tbody className="">
              <AutosSearchRow></AutosSearchRow>
              {vehiclesAllDatas}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AutosData;
