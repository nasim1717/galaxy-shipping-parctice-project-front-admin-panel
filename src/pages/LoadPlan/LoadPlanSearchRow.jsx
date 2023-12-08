import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Select from "react-select";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import {
  loadPlanPortOfDischarge,
  loadPlanPortOfLoading,
  loadPlanStatus,
} from "../../helper/selectOption";
import { useDispatch } from "react-redux";
import { loadPlanSearch } from "../../features/loadPlan/loadPlanSliece";

const LoadPlanSearchRow = () => {
  const dispatch = useDispatch();
  const [scbtnOnOf, setScBtnOnOf] = useState(false);
  const [columSearch, setColumSearch] = useState({
    customer_user_id: "",
    customer_name: "",
    plan_number: "",
    export_date: "",
    port_of_loading: "",
    port_of_discharge: "",
    status: "",
  });
  const [customerOptions, setCustomerOptions] = useState([]);
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
  useEffect(() => {
    if (customersItem?.data) {
      const options = customersItem?.data.map((item) => {
        return {
          value: {
            id: item?.user_id,
            name: item?.customer_name,
          },
          label: item?.customer_name,
        };
      });
      setCustomerOptions(options);
    }
  }, [customersItem?.data]);

  useEffect(() => {
    let flag = false;
    for (let [key, value] of Object.entries(columSearch)) {
      if (value) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setScBtnOnOf(true);
    }
  }, [columSearch]);

  useEffect(() => {
    dispatch(loadPlanSearch(columSearch));
  }, [
    columSearch.customer_name,
    columSearch.port_of_loading,
    columSearch.port_of_discharge,
    columSearch.status,
    dispatch,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadPlanSearch(columSearch));
  };

  const handleSearch = () => {
    dispatch(loadPlanSearch(columSearch));
  };
  const handleClearSearch = () => {
    setColumSearch({
      customer_user_id: "",
      customer_name: "",
      plan_number: "",
      export_date: "",
      port_of_loading: "",
      port_of_discharge: "",
      status: "",
    });
    dispatch(loadPlanSearch({}));
  };

  return (
    <tr>
      <td className="px-4"></td>
      <td className="px-4 ">
        <div className="search-input w-44 py-0 px-0">
          <Select
            onChange={(e) => {
              if (e) {
                setColumSearch({
                  ...columSearch,
                  customer_user_id: e.value.id,
                  customer_name: e.value.name,
                });
              } else {
                setColumSearch({
                  ...columSearch,
                  customer_user_id: "",
                  customer_name: "",
                });
              }
            }}
            value={
              columSearch.customer_name
                ? {
                    value: { id: columSearch.customer_user_id, name: columSearch.customer_name },
                    label: columSearch.customer_name,
                  }
                : ""
            }
            placeholder="Search Customer"
            options={customerOptions}
            isClearable={true}
            isLoading={isLoading}
          ></Select>
        </div>
      </td>
      <td className="py-3 px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, plan_number: e.target.value })}
            value={columSearch.plan_number}
            type="text"
            placeholder="Plan Number"
            className="search-input py-2 w-32"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, export_date: e.target.value })}
            value={columSearch.export_date}
            type="text"
            placeholder="Export Date"
            className="search-input py-2 w-32"
          />
        </form>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, port_of_loading: e.target.value })}
          value={columSearch.port_of_loading}
          name=""
          id=""
          className="search-input py-2 w-36 text-[#6b7280]"
        >
          <option value={""}>Select Part Of Loading</option>
          {loadPlanPortOfLoading.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, port_of_discharge: e.target.value })}
          value={columSearch.port_of_discharge}
          name=""
          id=""
          className="search-input py-2 w-36 text-[#6b7280]"
        >
          <option value={""}>Select Part Of Discharge</option>
          {loadPlanPortOfDischarge.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, status: e.target.value })}
          value={columSearch.status}
          name=""
          id=""
          className="search-input py-2 w-36 text-[#6b7280]"
        >
          <option value={""}>Select Status</option>
          {loadPlanStatus.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </td>
      <td className="">
        <div onClick={handleSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#047857] hover:text-white hover:shadow-2xl bg-[#dcfce7] text-[#065f46] font-extrabold `}
          >
            <HiMagnifyingGlass className="font-extrabold text-base"></HiMagnifyingGlass>
            <span>Search</span>
          </button>
        </div>
      </td>
      <td className="">
        <div onClick={handleClearSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#ef4444] hover:text-white hover:shadow-2xl bg-[#fee2e2] text-[#ef4444] font-extrabold `}
          >
            <AiOutlineCloseCircle className="font-extrabold text-base"></AiOutlineCloseCircle>
            <span>Clear</span>
          </button>
        </div>
      </td>
      <td></td>
      <td className="min-w-[50px]"></td>
    </tr>
  );
};

export default LoadPlanSearchRow;
