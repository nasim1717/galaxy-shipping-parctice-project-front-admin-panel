import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../features/vehicles/vehiclesSlice";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customeStyles = {
  control: (styles) => ({ ...styles, minWidth: "200px" }),
};

const AutosSearchRow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [scbtnOnOf, setScbtnOnOf] = useState(false);
  const dispatch = useDispatch();
  const [columSearch, setColumSearch] = useState({
    deliver_date: "",
    year: "",
    make: "",
    model: "",
    vin: "",
    lot_no: "",
    keys: "",
    title: "",
    location: "",
    status: "",
    auction_at: "",
  });

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
  }, [columSearch.keys, columSearch.location, columSearch.status, columSearch.title]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(search(columSearch));
  };

  const handleClearSearch = () => {
    setColumSearch({
      deliver_date: "",
      year: "",
      make: "",
      model: "",
      vin: "",
      lot_no: "",
      keys: "",
      title: "",
      location: "",
      status: "",
      auction_at: "",
    });
  };

  return (
    <tr className={`rounded-md`}>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="py-3 px-4">
        <Select
          options={options}
          styles={customeStyles}
          isClearable={isClearable}
          isLoading={isLoading}
        ></Select>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, lot_no: e.target.value })}
            value={columSearch.lot_no}
            type="text"
            placeholder="Lot No"
            className="search-input w-[130px] py-2 "
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, vin: e.target.value })}
            value={columSearch.vin}
            type="text"
            name="vin"
            placeholder="VIN"
            className="search-input w-[130px] py-2 "
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, year: e.target.value })}
            value={columSearch.year}
            type="number"
            placeholder="Year"
            className="search-input w-[130px] py-2 "
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, make: e.target.value })}
            value={columSearch.make}
            type="text"
            placeholder="Make"
            className="search-input w-[130px] py-2"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, model: e.target.value })}
            value={columSearch.model}
            type="text"
            placeholder="Model"
            className="search-input w-[130px] py-2"
          />
        </form>
      </td>
      <td className="px-4"></td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, deliver_date: e.target.value })}
            value={columSearch.deliver_date}
            type="text"
            placeholder="Deliver Date"
            className="search-input w-[130px] py-2"
          />
        </form>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => {
            setColumSearch({ ...columSearch, keys: e.target.value });
          }}
          value={columSearch.keys}
          name="searchKeys"
          id=""
          className="search-input min-w-[150px] py-2 text-[#808191]"
        >
          <option value="">Select Keys</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, location: e.target.value })}
          value={columSearch.location}
          name="searchYard"
          id=""
          className="search-input min-w-[150px] py-2 text-[#808191]"
        >
          <option value="">Select Yard</option>
          <option value={0}>WA</option>
          <option value={1}>VANCOUVER</option>
          <option value={2}>EDMONTON</option>
          <option value={3}>HALIFAX</option>
          <option value={4}>MONTREAL</option>
          <option value={5}>TORONTO</option>
          <option value={6}>GA</option>
          <option value={7}>LA</option>
        </select>
      </td>
      <td className="px-4">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setColumSearch({ ...columSearch, auction_at: e.target.value })}
            value={columSearch.auction_at}
            type="text"
            placeholder="Auction"
            className="search-input w-[130px] py-2"
          />
        </form>
      </td>
      <td className="px-4"></td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, status: e.target.value })}
          value={columSearch.status}
          name="searchStatus"
          id=""
          className="search-input min-w-[150px] py-2 text-[#808191]"
        >
          <option value="">Select Status</option>
          <option value={0}>ON HAND</option>
          <option value={1}>READY TO LOAD</option>
          <option value={2}>ON THE WAY</option>
          <option value={3}>LOADED</option>
          <option value={4}>NEW PURCHASED</option>
          <option value={5}>PORT ARRIVAL</option>
          <option value={6}>YARD ARRIVAL</option>
          <option value={7}>IS REQUESTED</option>
          <option value={8}>DISPATCHED</option>
          <option value={9}>RELISTED</option>
          <option value={10}>LOADED</option>
          <option value={11}>HANDED OVER</option>
        </select>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, title: e.target.value })}
          value={columSearch.title}
          name="searchTitle"
          id=""
          className="search-input min-w-[150px] py-2 text-[#808191]"
        >
          <option value="">Select Title</option>
          <option value={0}>NO TITLE</option>
          <option value={1}>EXPORTABLE</option>
          <option value={2}>PENDING</option>
          <option value={3}>BOS</option>
          <option value={4}>LIEN</option>
          <option value={5}>MV907</option>
          <option value={6}>REJECTED</option>
        </select>
      </td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td>
        <div className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            onClick={() => dispatch(search(columSearch))}
            className={`btn hover:bg-[#047857] hover:text-white hover:shadow-2xl bg-[#dcfce7] text-[#065f46] font-extrabold `}
          >
            <HiMagnifyingGlass className="font-extrabold text-base"></HiMagnifyingGlass>
            <span>Search</span>
          </button>
        </div>
      </td>
      <td>
        <div className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            onClick={handleClearSearch}
            className={`btn hover:bg-[#ef4444] hover:text-white hover:shadow-2xl bg-[#fee2e2] text-[#ef4444] font-extrabold `}
          >
            <AiOutlineCloseCircle className="font-extrabold text-base"></AiOutlineCloseCircle>
            <span>Clear</span>
          </button>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default AutosSearchRow;
