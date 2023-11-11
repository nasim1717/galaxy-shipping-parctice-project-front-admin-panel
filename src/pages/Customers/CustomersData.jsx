import { GoTriangleUp } from "react-icons/go";
import CustomersSearchRow from "./CustomersSearchRow";
import CustomerDataShow from "./CustomerDataShow";
import { useGetCustomersQuery } from "../../features/customers/customersApi";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { dataLimitInfo, totalPage } from "../../features/paginate/paginateSlice";
import Error from "../../components/Loader/Error";
import NoRecordData from "../../components/Loader/NoRecordData";

const CustomersData = () => {
  const dispatch = useDispatch();
  const [allCustomers, setAllCustomers] = useState(<Loader></Loader>);
  const dataLimit = useSelector((state) => state.pagination.dataLimit);
  const curentPage = useSelector((state) => state.pagination.curentPage);
  const [sorted, setSorted] = useState({ sorted: false, ordBy: null });
  const [sortStart, setSortStart] = useState(false);
  const { customerSearch, customerGlobalSearch, customerGlobalSearchOn } = useSelector(
    (state) => state.customers
  );

  const {
    data: customers,
    isFetching,
    isError,
  } = useGetCustomersQuery({
    dataLimit: dataLimit,
    curentPage,
    sorted,
    sortStart,
    customerGlobalSearch,
    customerGlobalSearchOn,
    customerSearch,
  });

  useEffect(() => {
    if (isFetching) {
      setAllCustomers(<Loader></Loader>);
    }
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setAllCustomers(<Error></Error>);
    }
  }, [isError]);

  useEffect(() => {
    if (customers?.data) {
      let content = null;
      if (customers?.data.length === 0) {
        content = <NoRecordData></NoRecordData>;
      } else {
        let sl = customers.from;
        content = customers.data.map((customer, index) => (
          <CustomerDataShow
            key={customer.id}
            customer={customer}
            index={index}
            to={sl++}
          ></CustomerDataShow>
        ));
      }

      setAllCustomers(content);
      dispatch(dataLimitInfo({ from: customers.from, to: customers.to, items: customers.total }));
    }
  }, [customers?.data, customers?.from, customers?.to, customers?.total, dispatch]);

  useEffect(() => {
    dispatch(totalPage(customers?.last_page));
  }, [customers?.last_page, dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1  overflow-auto px-4  h-[52vh]  pt-4">
        <div>
          <table className="text-sm text-left w-full ">
            <thead className="">
              <tr className="text-[#1f2937] font-extrabold bg-gray-100 rounded-md">
                <th className="py-3 px-4">SL</th>
                <th
                  onClick={() => {
                    setSorted({ ...sorted, sorted: !sorted.sorted, ordBy: "legacy_customer_id" });
                    setSortStart(true);
                  }}
                  className="px-2 underline min-w-[150px] cursor-pointer"
                >
                  <div className="flex items-center gap-x-1">
                    <span>Customer ID</span>
                    <GoTriangleUp
                      className={`${
                        sortStart && sorted.ordBy === "legacy_customer_id" ? "block" : "hidden"
                      } ${sorted.sorted ? "rotate-180" : ""} text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setSorted({ ...sorted, sorted: !sorted.sorted, ordBy: "customer_name" });
                    setSortStart(true);
                  }}
                  className="px-2 underline cursor-pointer"
                >
                  <div className="flex  items-center gap-x-1 min-w-[150px]">
                    <span>Customer Name</span>
                    <GoTriangleUp
                      className={`${
                        sortStart && sorted.ordBy === "customer_name" ? "block" : "hidden"
                      } ${sorted.sorted ? "rotate-180" : ""} text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setSorted({ ...sorted, sorted: !sorted.sorted, ordBy: "company_name" });
                    setSortStart(true);
                  }}
                  className="px-2 underline cursor-pointer"
                >
                  <div className="flex  items-center gap-x-1  min-w-[150px]">
                    <span>Company Name</span>
                    <GoTriangleUp
                      className={`${
                        sortStart && sorted.ordBy === "company_name" ? "block" : "hidden"
                      } ${sorted.sorted ? "rotate-180" : ""} text-lg`}
                    ></GoTriangleUp>
                  </div>
                </th>
                <th className="px-2 min-w-[120px]">All Vehicles</th>
                <th className="px-2 min-w-[120px]">On Hand</th>
                <th className="px-2 min-w-[150px]">Car On The Way</th>
                <th className="px-2 min-w-[120px]">Arrived</th>
                <th className="px-2 min-w-[120px]">Phone</th>
                <th className="px-2 min-w-[150px]">City Name</th>
                <th className="px-2 min-w-[100px]">Status</th>
                <th className="px-2 ">Action</th>
                <th className="px-2"></th>
                <th className="px-2"></th>
                <th className="px-2"></th>
                <th className="px-2"></th>
              </tr>
            </thead>
            <tbody className="">
              <CustomersSearchRow></CustomersSearchRow>
              {allCustomers}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomersData;
