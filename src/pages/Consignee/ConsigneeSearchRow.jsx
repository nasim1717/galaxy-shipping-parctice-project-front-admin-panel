import Select from "react-select";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { consigneeSearch } from "../../features/consignee/consigneeSlice";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ConsigneeSearchRow = () => {
  const [options, setCtomerOptions] = useState([]);
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
  const dispatch = useDispatch();
  const [scbtnOnOf, setScbtnOnOf] = useState(false);
  const [columSearch, setColumSearch] = useState({
    customer_user_id: "",
    customer_name: "",
    consignee_name: "",
    phone: "",
  });

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
      setCtomerOptions(options);
    }
  }, [customersItem?.data]);

  useEffect(() => {
    dispatch(consigneeSearch(columSearch));
  }, [columSearch.customer_name, dispatch]);

  useEffect(() => {
    let check = false;
    for (let key in columSearch) {
      if (columSearch[key]) {
        check = true;
        break;
      }
    }
    if (check) {
      setScbtnOnOf(true);
    } else {
      setScbtnOnOf(false);
    }
  }, [columSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(consigneeSearch(columSearch));
  };

  const handleSearch = () => {
    dispatch(consigneeSearch(columSearch));
  };

  const handleClearSearch = () => {
    setColumSearch({
      customer_user_id: "",
      customer_name: "",
      consignee_name: "",
      phone: "",
    });
  };

  return (
    <tr className="rounded-md">
      <th className="px-2"></th>
      <th className="py-3 px-4">
        <div className="min-w-[180px] ">
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
            options={options}
            isLoading={isLoading}
            isClearable={true}
            placeholder="Customer Name"
          ></Select>
        </div>
      </th>
      <th className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, consignee_name: e.target.value })}
            value={columSearch.consignee_name}
            type="text"
            className="search-input py-2"
            placeholder="Enter Name"
          />
        </form>
      </th>
      <th className=""></th>
      <th className="">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, phone: e.target.value })}
            value={columSearch.phone}
            type="text"
            className="search-input py-2"
            placeholder="Phone"
          />
        </form>
      </th>
      <th className="">
        <div onClick={handleSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#047857] hover:text-white hover:shadow-2xl bg-[#dcfce7] text-[#065f46] font-extrabold `}
          >
            <HiMagnifyingGlass className="font-extrabold text-base"></HiMagnifyingGlass>
            <span>Search</span>
          </button>
        </div>
      </th>
      <th className="">
        <div onClick={handleClearSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#ef4444] hover:text-white hover:shadow-2xl bg-[#fee2e2] text-[#ef4444] font-extrabold `}
          >
            <AiOutlineCloseCircle className="font-extrabold text-base"></AiOutlineCloseCircle>
            <span>Clear</span>
          </button>
        </div>
      </th>
      <th className=""></th>
      <th className=""></th>
    </tr>
  );
};

export default ConsigneeSearchRow;
