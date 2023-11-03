import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AutosDataShow from "./AutosDataShow";
import { useGetVehiclesQuery } from "../../features/vehicles/vehiclesApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalPage } from "../../features/paginate/paginateSlice";
import Loader from "../../components/Loader/Loader";

const AutosData = () => {
  const dispatch = useDispatch();
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const curentPage = useSelector((state) => state.pagination.curentPage);
  const [vehiclesAllDatas, setVehiclesAllDatas] = useState(<Loader></Loader>);
  const { data: vehiclesDatas } = useGetVehiclesQuery({
    page: curentPage,
    limit: dataLimit,
  });

  useEffect(() => {
    setVehiclesAllDatas(<Loader></Loader>);
  }, [dataLimit, curentPage]);

  useEffect(() => {
    if (vehiclesDatas?.data) {
      const content = vehiclesDatas?.data.map((vehicles, index) => (
        <AutosDataShow key={vehicles.id} vehicles={vehicles} index={index}></AutosDataShow>
      ));
      setVehiclesAllDatas(content);
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
                <th className="px-4">Lot Number</th>
                <th className="px-4">VIN</th>
                <th className="px-4">Year</th>
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
              <tr className="rounded-md">
                <td className="px-4"></td>
                <td className="px-4"></td>
                <td className="py-3 px-4">
                  <select
                    name="searchCustomer"
                    id=""
                    className="search-input min-w-[200px] py-2 text-[#808191]"
                  >
                    <option value="nasim1">nasim1</option>
                    <option value="nasim2">nasim2</option>
                    <option value="nasim3">nasim3</option>
                    <option value="nasim4">nasim4</option>
                  </select>
                </td>
                <td className="px-4">
                  <form>
                    <input
                      type="number"
                      placeholder="Lot No"
                      className="search-input w-[130px] py-2"
                    />
                  </form>
                </td>
                <td className="px-4">
                  <form>
                    <input type="text" placeholder="VIN" className="search-input w-[130px] py-2" />
                  </form>
                </td>
                <td className="px-4">
                  <form>
                    <input
                      type="number"
                      placeholder="Year"
                      className="search-input w-[130px] py-2"
                    />
                  </form>
                </td>
                <td className="px-4">
                  <form>
                    <input type="text" placeholder="Make" className="search-input w-[130px] py-2" />
                  </form>
                </td>
                <td className="px-4">
                  <form>
                    <input
                      type="text"
                      placeholder="Model"
                      className="search-input w-[130px] py-2"
                    />
                  </form>
                </td>
                <td className="px-4"></td>
                <td className="px-4">
                  <form>
                    <input
                      type="text"
                      placeholder="Deliver Date"
                      className="search-input w-[130px] py-2"
                    />
                  </form>
                </td>
                <td className="px-4">
                  <select
                    name="searchKeys"
                    id=""
                    className="search-input min-w-[150px] py-2 text-[#808191]"
                  >
                    <option value="" hidden>
                      Select Keys
                    </option>
                    <option value="nasim1">nasim1</option>
                    <option value="nasim2">nasim2</option>
                    <option value="nasim3">nasim3</option>
                    <option value="nasim4">nasim4</option>
                  </select>
                </td>
                <td className="px-4">
                  <select
                    name="searchYard"
                    id=""
                    className="search-input min-w-[150px] py-2 text-[#808191]"
                  >
                    <option value="" hidden>
                      Select Yard
                    </option>
                    <option value="nasim1">nasim1</option>
                    <option value="nasim2">nasim2</option>
                    <option value="nasim3">nasim3</option>
                    <option value="nasim4">nasim4</option>
                  </select>
                </td>
                <td className="px-4">
                  <form>
                    <input
                      type="text"
                      placeholder="Auction"
                      className="search-input w-[130px] py-2"
                    />
                  </form>
                </td>
                <td className="px-4"></td>
                <td className="px-4">
                  <select
                    name="searchStatus"
                    id=""
                    className="search-input min-w-[150px] py-2 text-[#808191]"
                  >
                    <option value="" hidden>
                      Select Status
                    </option>
                    <option value="nasim1">nasim1</option>
                    <option value="nasim2">nasim2</option>
                    <option value="nasim3">nasim3</option>
                    <option value="nasim4">nasim4</option>
                  </select>
                </td>
                <td className="px-4">
                  <select
                    name="searchTitle"
                    id=""
                    className="search-input min-w-[150px] py-2 text-[#808191]"
                  >
                    <option value="" hidden>
                      Select Title
                    </option>
                    <option value="nasim1">nasim1</option>
                    <option value="nasim2">nasim2</option>
                    <option value="nasim3">nasim3</option>
                    <option value="nasim4">nasim4</option>
                  </select>
                </td>
                <td className="px-4"></td>
                <td className="px-4"></td>
                <td className="px-4"></td>
                <td>
                  <button className="btn hover:bg-[#047857] hover:text-white hover:shadow-2xl bg-[#dcfce7] text-[#065f46] font-extrabold">
                    <HiMagnifyingGlass className="font-extrabold text-base"></HiMagnifyingGlass>
                    <span>Search</span>
                  </button>
                </td>
                <td>
                  <button className="btn hover:bg-[#ef4444] hover:text-white hover:shadow-2xl bg-[#fee2e2] text-[#ef4444] font-extrabold">
                    <AiOutlineCloseCircle className="font-extrabold text-base"></AiOutlineCloseCircle>
                    <span>Clear</span>
                  </button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {vehiclesAllDatas}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AutosData;
