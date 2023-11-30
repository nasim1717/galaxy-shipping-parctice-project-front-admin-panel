import Select from "react-select";
import { useGetCustomersItemQuery } from "../../features/customers/customersApi";
import { useEffect, useState } from "react";

const ConsigneeSearchRow = () => {
  const [options, setCtomerOptions] = useState([]);
  const { data: customersItem, isLoading } = useGetCustomersItemQuery();
  const [columSearch, setColumSearch] = useState({
    customer_user_id: "",
    customer_name: "",
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
        <input type="text" className="search-input py-2" placeholder="Enter Name" />
      </th>
      <th className=""></th>
      <th className="">
        <input type="text" className="search-input py-2" placeholder="Phone" />
      </th>
      <th className=""></th>
      <th className=""></th>
      <th className=""></th>
      <th className=""></th>
    </tr>
  );
};

export default ConsigneeSearchRow;
