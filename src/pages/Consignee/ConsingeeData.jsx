import { useDispatch, useSelector } from "react-redux";
import ConsigneeSearchRow from "./ConsigneeSearchRow";
import { useGetConsigneesQuery } from "../../features/consignee/consigneeApi";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import NoRecordData from "../../components/Loader/NoRecordData";
import Error from "../../components/Loader/Error";
import ConsigneeDataShow from "./ConsigneeDataShow";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";

const ConsingeeData = () => {
  const currentPage = useSelector((state) => state.pagination.curentPage);
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const [consignees, setConsignees] = useState(<Loader></Loader>);
  const dispatch = useDispatch();
  const {
    data: consigneesData,
    isFetching,
    isError,
  } = useGetConsigneesQuery({ currentPage, dataLimit });

  console.log(consigneesData);

  useEffect(() => {
    if (isFetching) {
      setConsignees(<Loader></Loader>);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setConsignees(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    if (consigneesData?.data) {
      if (consigneesData.data.length === 0) {
        setConsignees(<NoRecordData></NoRecordData>);
      } else {
        let serial = consigneesData.from;
        const content = consigneesData.data.map((item, index) => (
          <ConsigneeDataShow
            key={item.id}
            index={index}
            consignees={item}
            serial={serial++}
          ></ConsigneeDataShow>
        ));
        setConsignees(content);
      }
    }
    dispatch(
      dataLimitInfo({
        from: consigneesData?.from,
        to: consigneesData?.to,
        items: consigneesData?.total,
      })
    );
  }, [
    consigneesData?.data,
    consigneesData?.from,
    consigneesData?.to,
    consigneesData?.total,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(totalPage(consigneesData?.total));
  }, [consigneesData?.total, dispatch]);

  return (
    <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
      <div>
        <table className="text-sm text-left w-full ">
          <thead className="">
            <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md ">
              <th className="py-3 px-2 min-w-[100px]">SL</th>
              <th className="px-2 min-w-[100px]">Customer Name</th>
              <th className="px-2 min-w-[100px]">Consignee Name</th>
              <th className="px-4 min-w-[100px]">Consignee Address 1</th>
              <th className="px-2 min-w-[100px]">Phone</th>
              <th className="px-2 min-w-[100px]">Action</th>
              <th className="px-2 min-w-[100px]"></th>
              <th className="px-2 min-w-[100px]"></th>
              <th className="px-2 min-w-[100px]"></th>
            </tr>
          </thead>
          <tbody className="text-gray-500 font-extrabold text-sm">
            <ConsigneeSearchRow></ConsigneeSearchRow>
            {consignees}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsingeeData;
