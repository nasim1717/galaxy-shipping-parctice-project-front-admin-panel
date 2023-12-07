import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { exportsStatusOptions } from "../../helper/selectOption";
import { search } from "../../features/exports/exportsSlice";

const customeStyles = {
  control: (styles) => ({ ...styles, minWidth: "200px" }),
};

const ExportsSearchRow = () => {
  const dispatch = useDispatch();
  const [scbtnOnOf, setScbtnOnOf] = useState(false);
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
  const [customerNamOptions, setCtomerOptions] = useState([]);

  const [columSearch, setColumSearch] = useState({
    container_number: "",
    booking_number: "",
    terminal: "",
    vessel: "",
    loading_date: "",
    export_date: "",
    eta: "",
    status_name: "",
    customer_name: "",
    customer_user_id: "",
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

  useEffect(() => {
    dispatch(search(columSearch));
  }, [columSearch.customer_name, columSearch.status_name, dispatch]);

  const handleClearSearch = () => {
    setColumSearch({
      container_number: "",
      booking_number: "",
      terminal: "",
      vessel: "",
      loading_date: "",
      export_date: "",
      eta: "",
      status_name: "",
      customer_name: "",
      customer_user_id: "",
    });
    dispatch(search({}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(columSearch));
  };

  const handleSearch = () => {
    dispatch(search(columSearch));
  };

  return (
    <tr className={`rounded-md`}>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, container_number: e.target.value })}
            value={columSearch.container_number}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Container Nun"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, booking_number: e.target.value })}
            value={columSearch.booking_number}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Booking Numb"
          />
        </form>
      </td>
      <td className="py-3 px-4">
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
          options={customerNamOptions}
          styles={customeStyles}
          isClearable={true}
          isLoading={isLoading}
        ></Select>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, terminal: e.target.value })}
            value={columSearch.terminal}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Terminal"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, vessel: e.target.value })}
            value={columSearch.vessel}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Vessel"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, loading_date: e.target.value })}
            value={columSearch.loading_date}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Loading Date"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, export_date: e.target.value })}
            value={columSearch.export_date}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Export Date"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, eta: e.target.value })}
            value={columSearch.eta}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Eta"
          />
        </form>
      </td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, status_name: e.target.value })}
          value={columSearch.status_name}
          name=""
          id=""
          className="search-input min-w-[150px] py-2 text-[#808191]"
        >
          <option value="">Select Status</option>
          {exportsStatusOptions.map((status) => (
            <option key={status.label} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
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
      <td className="px-1">
        <div onClick={handleClearSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#ef4444] hover:text-white hover:shadow-2xl bg-[#fee2e2] text-[#ef4444] font-extrabold `}
          >
            <AiOutlineCloseCircle className="font-extrabold text-base"></AiOutlineCloseCircle>
            <span>Clear</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExportsSearchRow;
