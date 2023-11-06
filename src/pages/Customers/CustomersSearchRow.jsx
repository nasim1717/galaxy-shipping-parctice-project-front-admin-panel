import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerSearch } from "../../features/customers/customersSlice";

const CustomersSearchRow = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    customer_name: "",
    company_name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerSearch(search));
  };

  return (
    <tr className={`rounded-md`}>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="py-3 px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearch({ ...search, customer_name: e.target.value })}
            value={search.customer_name}
            type="text"
            className="search-input py-2"
            placeholder="Customer Name"
          />
        </form>
      </td>
      <td className="px-4">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearch({ ...search, company_name: e.target.value })}
            value={search.company_name}
            type="text"
            className="search-input py-2"
            placeholder="Company Name"
          />
        </form>
      </td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
      <td className="px-4"></td>
    </tr>
  );
};

export default CustomersSearchRow;
