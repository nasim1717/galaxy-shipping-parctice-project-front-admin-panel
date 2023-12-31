import Select from "react-select";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import { useEffect, useState } from "react";
import { streamshipLine } from "../../helper/selectOption";
import { useDispatch } from "react-redux";
import { selectCustomer } from "../../features/exports/exportsSlice";
import { useFormContext, Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const ExportInfo = () => {
  const [customrs, setCustomers] = useState({ customer_name: "", id: "", customerUserId: "" });
  const [customersOptions, setCustomersOptions] = useState([]);
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
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

  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Export Info</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <div className="export-modal-inp-content">
          <label htmlFor="customerName">Customer Name</label>
          <div className="xl:w-96 md:w-72 sm:w-60 w-48">
            <Controller
              name="customer_user_id"
              control={control}
              rules={{
                required: "Customer user id is Required",
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
                        dispatch(selectCustomer(e.value));
                      } else {
                        setCustomers({
                          ...customrs,
                          id: "",
                          customer_name: "",
                          customerUserId: "",
                        });
                        dispatch(selectCustomer({}));
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
        <div className="export-modal-inp-content">
          <label htmlFor="customerRefId">Customer Ref ID</label>
          <input
            type="text"
            value={customrs.id}
            id="customerRefId"
            readOnly
            placeholder="Customer Ref ID"
            className="export-modal-input"
          />
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="BookingNumber">Booking Number</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <input
              {...register("booking_number", { required: "Booking Number is Required" })}
              type="text"
              id="BookingNumber"
              placeholder="Booking Number"
              className={`export-modal-input ${
                errors?.booking_number && "input-text-error border-red-500"
              }`}
            />

            {errors?.booking_number && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.booking_number && (
              <p className="text-red-500">{errors?.booking_number?.message}</p>
            )}
          </div>
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="ContainerNo">Container No</label>
          <input
            type="text"
            id="ContainerNo"
            placeholder="Container No"
            className="export-modal-input"
          />
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="SealNo">Seal No</label>
          <input type="text" id="SealNo" placeholder="Seal No" className="export-modal-input" />
        </div>
        {/* vessel start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Vessel">Vessel</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <input
              {...register("vessel", { required: "Vessel is Required" })}
              type="text"
              id="Vessel"
              placeholder="Vessel"
              className={`export-modal-input ${
                errors?.vessel && "input-text-error border-red-500"
              }`}
            />
            {errors?.vessel && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.vessel && <p className="text-red-500 pt-1">{errors?.vessel?.message}</p>}
          </div>
        </div>
        {/* vessel end */}
        <div className="export-modal-inp-content">
          <label htmlFor="Voyage">Voyage</label>
          <input type="text" id="Voyage" placeholder="Voyage" className="export-modal-input" />
        </div>
        {/*Streamship Line start  */}
        <div className="export-modal-inp-content">
          <label htmlFor="StreamshipLine">Streamship Line</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <select
              {...register("streamship_line", { required: "Streamship line is Required" })}
              className={`export-modal-input text-[#6b7280]  ${
                errors?.streamship_line && "input-text-error border-red-500"
              }`}
            >
              <option value="">Select Streamship Line</option>
              {streamshipLine.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors?.streamship_line && (
              <MdErrorOutline className="absolute top-2 right-5 text-red-500"></MdErrorOutline>
            )}
            {errors?.streamship_line && (
              <p className="text-red-500 pt-1">{errors?.streamship_line?.message}</p>
            )}
          </div>
        </div>
        {/* Streamship Line end */}
        <div className="export-modal-inp-content">
          <label htmlFor="XTNNo">XTN No</label>
          <input type="text" id="XTNNo" placeholder="XTN No" className="export-modal-input" />
        </div>
        {/* ITN start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ITN">ITN</label>
          <input type="text" id="ITN" placeholder="ITN" className="export-modal-input" />
        </div>
        {/* ITN end */}
        {/* Broker Name start */}
        <div className="export-modal-inp-content">
          <label htmlFor="BrokerName">Broker Name</label>
          <input
            type="text"
            id="BrokerName"
            placeholder="Broker Name"
            className="export-modal-input"
          />
        </div>
        {/* Broker Name end */}
        {/* OTI Number start */}
        <div className="export-modal-inp-content">
          <label htmlFor="OTINumber">OTI Number</label>
          <input
            type="text"
            id="OTINumber"
            placeholder="OTI Number"
            className="export-modal-input"
          />
        </div>
        {/* OTI Number end */}
        {/* Terminal start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Terminal">Terminal</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <input
              {...register("terminal", { required: "Terminal is Required" })}
              type="text"
              id="Terminal"
              placeholder="Terminal"
              className={`export-modal-input ${
                errors?.terminal && "input-text-error border-red-500"
              }`}
            />
            {errors?.terminal && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.terminal && <p className="text-red-500 pt-1">{errors?.terminal?.message}</p>}
          </div>
        </div>
        {/* Terminal end */}
        {/* Destination start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Destination">Destination</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <input
              {...register("destination", { required: "Destination is Required" })}
              type="text"
              id="Destination"
              placeholder="Destination"
              className={`export-modal-input ${
                errors?.destination && "input-text-error border-red-500"
              }`}
            />
            {errors?.destination && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.destination && (
              <p className="text-red-500 pt-1">{errors?.destination?.message}</p>
            )}
          </div>
        </div>
        {/* Destination end */}
        {/* GR No start */}
        <div className="export-modal-inp-content">
          <label htmlFor="GRNo">GR No</label>
          <input type="text" id="GRNo" placeholder="GR No" className="export-modal-input" />
        </div>
        {/* GR No end */}
        {/* Loading Date start */}
        <div className="export-modal-inp-content">
          <label htmlFor="LoadingDate">Loading Date</label>
          <input type="date" id="Loading Date" className="export-modal-input" />
        </div>
        {/* Loading Date end */}
        {/* Cut Off start */}
        <div className="export-modal-inp-content">
          <label htmlFor="CutOff">Cut Off</label>
          <input type="date" id="CutOff" className="export-modal-input" />
        </div>
        {/* Cut Off end */}
        {/* Export Date start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ExportDate">Export Date</label>
          <input type="date" id="ExportDate" className="export-modal-input" />
        </div>
        {/* Export Date end */}
        {/* ETA start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ETA">ETA</label>
          <input type="date" id="ETA" className="export-modal-input" />
        </div>
        {/* ETA end */}
        {/* Contact Details start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ContactDetails">Contact Details</label>
          <textarea
            type="text"
            id="ContactDetails"
            placeholder="Contact Details"
            className="export-modal-input"
          />
        </div>
        {/* Contact Details end */}
      </div>
    </div>
  );
};

export default ExportInfo;
