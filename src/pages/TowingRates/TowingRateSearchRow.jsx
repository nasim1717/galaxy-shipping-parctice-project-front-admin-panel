import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Select from "react-select";
import { countrysApi, useGetCountryQuery } from "../../features/countrys/countrysApi";
import { useDispatch } from "react-redux";
import { useGetLocationQuery } from "../../features/search/searchApi";
import { towingRatesStatus } from "../../helper/selectOption";
import { towingRateSearch } from "../../features/towinRates/towingRateSlice";
import { onlyNumberCheck } from "../../helper/helper";

const TowingRateSearchRow = () => {
  const dispatch = useDispatch();
  const [scbtnOnOf, setScBtnOnOf] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [yardOptions, setYardOptions] = useState([]);
  const [columSearch, setColumSearch] = useState({
    country_name: "",
    country_id: "",
    state_id: "",
    state_name: "",
    city_name: "",
    city_id: "",
    location_id: "",
    location_name: "",
    status: "",
    rate: "",
  });
  const [loading, setLoading] = useState({
    stateLoading: false,
    cityLoadig: false,
    yardLoading: false,
  });
  const { data: country, isLoading } = useGetCountryQuery();
  const { data: yard, isLoading: yardLoading } = useGetLocationQuery();
  useEffect(() => {
    if (country?.data) {
      const options = country.data.map((item) => ({
        value: { id: item.id, name: item.name },
        label: item.name,
      }));
      setCountryOptions(options);
    }
  }, [country]);

  //   set yard options
  useEffect(() => {
    if (yard?.data) {
      const options = yard.data.map((item) => ({
        value: { id: item.id, name: item.name },
        label: item.name,
      }));
      setYardOptions(options);
    }
  }, [yard]);

  //   get state
  useEffect(() => {
    if (columSearch.country_id) {
      dispatch(countrysApi.endpoints.getState.initiate(columSearch.country_id))
        .unwrap()
        .then((res) => {
          const options = res.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setStateOptions(options);
          setLoading({ ...loading, stateLoading: false });
        })
        .catch((er) => console.log(er));
    }
  }, [columSearch.country_name, columSearch.country_id, dispatch]);

  // get city
  useEffect(() => {
    if (columSearch.state_id) {
      dispatch(countrysApi.endpoints.getCity.initiate(columSearch.state_id))
        .unwrap()
        .then((res) => {
          const options = res.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setCityOptions(options);
          setLoading({ ...loading, cityLoadig: false });
        })
        .catch((er) => console.log(er));
    }
  }, [columSearch.state_name, dispatch]);

  useEffect(() => {
    if (
      columSearch.country_name ||
      columSearch.state_name ||
      columSearch.city_name ||
      columSearch.status
    ) {
      dispatch(towingRateSearch(columSearch));
    }
  }, [
    columSearch.country_name,
    columSearch.state_name,
    columSearch.city_name,
    columSearch.status,
    dispatch,
  ]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(towingRateSearch(columSearch));
  };

  const handleSearch = () => {
    dispatch(towingRateSearch(columSearch));
  };
  const handleClearSearch = () => {
    setColumSearch({
      country_name: "",
      country_id: "",
      state_id: "",
      state_name: "",
      city_name: "",
      city_id: "",
      location_id: "",
      location_name: "",
      status: "",
      rate: "",
    });
    dispatch(towingRateSearch({}));
    setScBtnOnOf(false);
  };
  return (
    <tr>
      <td></td>
      <td className="px-4 py-3">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              const rateValue = onlyNumberCheck(e.target.value);
              setColumSearch({ ...columSearch, rate: rateValue });
            }}
            value={columSearch.rate}
            type="text"
            placeholder="Rate"
            className="search-input w-32 py-2"
          />
        </form>
      </td>
      <td className="px-4">
        <div className="w-48">
          <Select
            onChange={(e) => {
              if (e?.value) {
                setLoading({ ...loading, stateLoading: true });
                setColumSearch({
                  ...columSearch,
                  country_name: e.value.name,
                  country_id: e.value.id,
                });
              } else {
                setColumSearch({
                  ...columSearch,
                  country_name: "",
                  country_id: "",
                });
              }
            }}
            value={
              columSearch.country_name
                ? {
                    value: { id: columSearch.country_id, name: columSearch.country_name },
                    label: columSearch.country_name,
                  }
                : ""
            }
            options={countryOptions}
            isClearable={true}
            isLoading={isLoading}
            placeholder="Select Country"
          ></Select>
        </div>
      </td>
      <td className="px-4">
        <div className="w-48">
          <Select
            onChange={(e) => {
              if (e?.value) {
                setLoading({ ...loading, cityLoadig: true });
                setColumSearch({
                  ...columSearch,
                  state_name: e.value.name,
                  state_id: e.value.id,
                });
              } else {
                setColumSearch({
                  ...columSearch,
                  state_name: "",
                  state_id: "",
                });
              }
            }}
            value={
              columSearch.state_name
                ? {
                    value: { id: columSearch.state_id, name: columSearch.state_name },
                    label: columSearch.state_name,
                  }
                : ""
            }
            options={stateOptions}
            isClearable={true}
            isLoading={loading.stateLoading}
            placeholder="Select State"
          ></Select>
        </div>
      </td>
      <td className="px-4">
        <div className="w-48">
          <Select
            onChange={(e) => {
              if (e?.value) {
                setColumSearch({
                  ...columSearch,
                  city_name: e.value.name,
                  city_id: e.value.id,
                });
              } else {
                setColumSearch({
                  ...columSearch,
                  city_name: "",
                  city_id: "",
                });
              }
            }}
            value={
              columSearch.city_name
                ? {
                    value: { id: columSearch.city_id, name: columSearch.city_name },
                    label: columSearch.city_name,
                  }
                : ""
            }
            options={cityOptions}
            isClearable={true}
            isLoading={loading.cityLoadig}
            placeholder="Select City"
          ></Select>
        </div>
      </td>
      <td className="px-4">
        <div className="w-48">
          <Select
            onChange={(e) => {
              if (e?.value) {
                setColumSearch({
                  ...columSearch,
                  location_name: e.value.name,
                  location_id: e.value.id,
                });
              } else {
                setColumSearch({
                  ...columSearch,
                  location_name: "",
                  location_id: "",
                });
              }
            }}
            value={
              columSearch.location_name
                ? {
                    value: { id: columSearch.location_id, name: columSearch.location_name },
                    label: columSearch.location_name,
                  }
                : ""
            }
            options={yardOptions}
            isClearable={true}
            isLoading={yardLoading}
            placeholder="Select Yard"
          ></Select>
        </div>
      </td>
      <td className="px-4">
        <select
          onChange={(e) => setColumSearch({ ...columSearch, status: e.target.value })}
          className="search-input py-2 text-[#6b7280]"
        >
          <option value="">Select Status</option>
          {towingRatesStatus.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </td>
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
      <td></td>
    </tr>
  );
};

export default TowingRateSearchRow;
