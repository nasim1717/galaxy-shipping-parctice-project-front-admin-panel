import React, { useEffect, useState } from "react";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";

const customeStyles = {
  control: (styles) => ({ ...styles, paddingTop: "1px", paddingBottom: "1px", height: "1px" }),
};

const CustomersInfo = () => {
  const { data: customersInfo, isLoading } = useGetCustomersItemQuery();
  const [customer, setCutomer] = useState({ name: "", id: "" });
  const [options, setOptions] = useState([]);
  const {
    formState: { errors },
    control,
  } = useFormContext();

  useEffect(() => {
    if (customersInfo?.data) {
      console.log(customersInfo.data);
      const optionsarray = customersInfo?.data.map((item) => {
        return {
          value: {
            id: item?.legacy_customer_id,
            name: item?.customer_name,
            customer_user_id: item.user_id,
          },
          label: item?.customer_name,
        };
      });
      setOptions(optionsarray);
    }
  }, [customersInfo?.data]);

  return (
    <div className="flex flex-col gap-y-2 px-3 mb-4">
      <p>Customer Info</p>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="autos-modal-inp-content">
          <label htmlFor="">Customer Name</label>
          <div className="xl:w-96 md:w-72 w-48">
            <Controller
              name="customer_user_id"
              control={control}
              rules={{
                required: "Customer can not be blank.",
              }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setCutomer({ ...customer, name: e?.value?.name, id: e?.value?.id });
                    }}
                    options={options}
                    isLoading={isLoading}
                    isClearable={true}
                    styles={customeStyles}
                  ></Select>
                </>
              )}
            ></Controller>

            {errors?.customer_user_id && (
              <p className="text-red-500">{errors?.customer_user_id?.message}</p>
            )}
          </div>
        </div>
        <div className="autos-modal-inp-content">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            value={customer.id ? customer.id : ""}
            readOnly
            className="autos-modal-input"
          />
        </div>
      </div>
    </div>
  );
};

export const CustomerInfo = React.memo(CustomersInfo);
