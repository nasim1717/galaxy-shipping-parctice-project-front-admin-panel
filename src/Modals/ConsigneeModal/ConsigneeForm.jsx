import { useEffect, useState } from "react";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { countrysApi, useGetCountryQuery } from "../../features/countrys/countrysApi";
import { useDispatch } from "react-redux";
import { MdErrorOutline } from "react-icons/md";

const ConsigneeForm = () => {
  const [customrs, setCustomers] = useState({ customer_name: "", id: "", customerUserId: "" });
  const [customersOptions, setCustomersOptions] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [optionsCountry, setOptionsCountry] = useState([]);
  const [optionsState, setOptionsState] = useState([]);
  const [optionsCity, setOptionsCity] = useState([]);
  const [loading, setLoading] = useState({ stateLoading: false, cityLoading: false });
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
  const { data: countrys, isLoading: countryLoading } = useGetCountryQuery();
  const dispatch = useDispatch();

  const {
    formState: { errors },
    control,
    register,
  } = useFormContext();

  useEffect(() => {
    if (customersItem?.data) {
      const options = customersItem?.data.map((item) => {
        return {
          value: {
            id: item?.legacy_customer_id,
            name: item?.customer_name,
            customerUserId: item.user_id,
          },
          label: item?.customer_name,
        };
      });
      setCustomersOptions(options);
    }
  }, [customersItem?.data]);

  useEffect(() => {
    if (countrys?.data) {
      const options = countrys.data.map((country) => ({
        value: { id: country.id, name: country.name },
        label: country.name,
      }));
      setOptionsCountry(options);
    }
  }, [countrys]);

  useEffect(() => {
    if (selectCountry) {
      dispatch(countrysApi.endpoints.getState.initiate(selectCountry.id))
        .unwrap()
        .then((data) => {
          const options = data.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setOptionsState(options);
          setLoading({ ...loading, stateLoading: false });
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, [selectCountry, dispatch]);

  useEffect(() => {
    if (selectState) {
      dispatch(countrysApi.endpoints.getCity.initiate(selectState.id))
        .unwrap()
        .then((data) => {
          const options = data.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setOptionsCity(options);
          setLoading({ ...loading, cityLoading: false });
        })
        .catch((er) => console.log(er));
    }
  }, [selectState, dispatch]);

  return (
    <div className="grid grid-cols-2 2xl:gap-x-28 gap-y-4  md:justify-items-center">
      <div>
        <label htmlFor="CustomerName">Customer Name</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 text-[#6b7280] text-sm">
          <Controller
            name="customer_user_id"
            control={control}
            rules={{
              required: "Customer Name is Required",
            }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e) {
                      setCustomers({
                        ...customrs,
                        id: e.value.id,
                        customer_name: e.value.name,
                        customerUserId: e.value.customerUserId,
                      });
                    } else {
                      setCustomers({
                        ...customrs,
                        id: "",
                        customer_name: "",
                        customerUserId: "",
                      });
                    }
                  }}
                  value={
                    customrs.customer_name
                      ? {
                          value: {
                            id: customrs.legacy_customer_id,
                            name: customrs.customer_name,
                          },
                          label: customrs.customer_name,
                        }
                      : ""
                  }
                  placeholder="Customer Name"
                  options={customersOptions}
                  isClearable={true}
                  isLoading={isLoading}
                ></Select>
              </>
            )}
          ></Controller>
          {errors?.customer_user_id && (
            <p className="text-red-500">{errors?.customer_user_id?.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="consgineeName">Consginee Name</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 relative">
          <input
            {...register("consignee_name", { required: "Consignee Name is Required" })}
            type="text"
            name="consignee_name"
            id="consgineeName"
            placeholder="Consignee Name"
            className="consigne-modal-input py-[6px]"
          />
          {errors?.consignee_name && (
            <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
          )}
          {errors.consignee_name && (
            <p className="text-red-500 text-sm">{errors.consignee_name.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 relative">
          <input
            {...register("phone", { required: "Phone is Required" })}
            type="text"
            id="phone"
            placeholder="Phone"
            className="consigne-modal-input py-[6px]"
          />
          {errors?.phone && (
            <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
          )}
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="consgineeAddress1">Consginee Address 1</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48">
          <input
            type="text"
            id="consgineeAddress1"
            placeholder="Consignee Address 1"
            className="consigne-modal-input py-[6px]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="consigneeAddress2">Consginee Address 2</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48">
          <input
            type="text"
            id="consgineeAddress2"
            placeholder="Consignee Address 2"
            className="consigne-modal-input py-[6px]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="Country">Country</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 text-[#6b7280] text-sm">
          <Controller
            name="country"
            control={control}
            rules={{
              required: "Country is required",
            }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e) {
                      setSelectCountry(e.value);
                      setLoading({ ...loading, stateLoading: true });
                    } else {
                      setSelectCountry("");
                      setSelectState("");
                      setSelectCity("");
                      setOptionsState([]);
                      setOptionsCity([]);
                    }
                  }}
                  value={
                    selectCountry
                      ? {
                          value: { id: selectCountry.id, name: selectCountry.name },
                          label: selectCountry.name,
                        }
                      : ""
                  }
                  placeholder="Select Country.."
                  options={optionsCountry}
                  isClearable={true}
                  isLoading={countryLoading}
                ></Select>
              </>
            )}
          ></Controller>
          {errors?.country && <p className="text-red-500">{errors?.country?.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 text-[#6b7280] text-sm">
          <Controller
            name="state"
            control={control}
            rules={{
              required: "State is required",
            }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e) {
                      setSelectState(e.value);
                      setLoading({ ...loading, cityLoading: true });
                    } else {
                      setSelectState("");
                      setSelectCity("");
                      setOptionsCity([]);
                    }
                  }}
                  value={
                    selectState
                      ? {
                          value: { id: selectState.id, name: selectState.name },
                          label: selectState.name,
                        }
                      : ""
                  }
                  placeholder="Select State.."
                  options={optionsState}
                  isClearable={true}
                  isLoading={loading.stateLoading}
                ></Select>
              </>
            )}
          ></Controller>
          {errors?.state && <p className="text-red-500">{errors?.state?.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="city">City</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48 text-[#6b7280] text-sm">
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
            }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e) {
                      setSelectCity(e.value);
                    } else {
                      setSelectCity("");
                    }
                  }}
                  value={
                    selectCity
                      ? {
                          value: { id: selectCity.id, name: selectCity.name },
                          label: selectCity.name,
                        }
                      : ""
                  }
                  placeholder="Select City.."
                  options={optionsCity}
                  isClearable={true}
                  isLoading={loading.cityLoading}
                ></Select>
              </>
            )}
          ></Controller>
          {errors?.city && <p className="text-red-500">{errors?.city?.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <div className="2xl:w-96 md:w-72 sm:w-60 w-48">
          <input
            type="text"
            name=""
            id="zipCode"
            placeholder="Zip Code"
            className="consigne-modal-input py-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsigneeForm;
