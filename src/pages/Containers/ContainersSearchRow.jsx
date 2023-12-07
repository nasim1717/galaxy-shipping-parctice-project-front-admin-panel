import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { containerSearch } from "../../features/containers/containersSlice";

const ContainersSearchRow = () => {
  const [scbtnOnOf, setScBtnOnOf] = useState(false);
  const dispatch = useDispatch();
  const [columnSearch, setColumnSearch] = useState({
    loading_date: "",
    export_date: "",
    eta: "",
    booking_number: "",
    container_number: "",
  });

  useEffect(() => {
    let flag = false;
    for (let [key, value] of Object.entries(columnSearch)) {
      if (value) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setScBtnOnOf(true);
    }
  }, [columnSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(containerSearch(columnSearch));
  };
  const handleSearch = () => {
    dispatch(containerSearch(columnSearch));
  };
  const handleClearSearch = () => {
    setColumnSearch({
      loading_date: "",
      export_date: "",
      eta: "",
      booking_number: "",
      container_number: "",
    });
    setScBtnOnOf(false);
    dispatch(containerSearch({}));
  };

  return (
    <tr>
      <td></td>
      <td className="px-4 py-3">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumnSearch({ ...columnSearch, loading_date: e.target.value })}
            value={columnSearch.loading_date}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Loaded date"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumnSearch({ ...columnSearch, export_date: e.target.value })}
            value={columnSearch.export_date}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Export date"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumnSearch({ ...columnSearch, eta: e.target.value })}
            value={columnSearch.eta}
            type="text"
            className="search-input w-36 py-2"
            placeholder="ETA"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumnSearch({ ...columnSearch, booking_number: e.target.value })}
            value={columnSearch.booking_number}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Booking Number"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColumnSearch({ ...columnSearch, container_number: e.target.value })}
            value={columnSearch.container_number}
            type="text"
            className="search-input w-36 py-2"
            placeholder="Container Number"
          />
        </form>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <div onClick={handleSearch} className={`${scbtnOnOf ? "block" : "hidden"}`}>
          <button
            className={`btn hover:bg-[#047857] hover:text-white hover:shadow-2xl bg-[#dcfce7] text-[#065f46] font-extrabold `}
          >
            <HiMagnifyingGlass className="font-extrabold text-base"></HiMagnifyingGlass>
            <span>Search</span>
          </button>
        </div>
      </td>
      <td>
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
    </tr>
  );
};

export default ContainersSearchRow;
