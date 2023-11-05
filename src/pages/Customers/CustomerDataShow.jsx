import ViewButton from "../../components/Buttons/ViewButton";
import EditButton from "../../components/Buttons/EditButton";
import PasswordButton from "../../components/Buttons/PasswordButton";
import DeleteButtons from "../../components/Buttons/DeleteButtons";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CustomerDataShow = ({ customer, index, to }) => {
  const [checked, setChecked] = useState(true);

  const {
    legacy_customer_id,
    customer_name,
    company_name,
    vehicles_count,
    on_hand_count,
    on_the_way_count,
    arrived_count,
    phone,
    city_name,
  } = customer;

  return (
    <tr className={`rounded-md ${index % 2 === 0 && "bg-gray-100"}  text-[#4b5563]`}>
      <td className="px-4 py-4">{to}</td>
      <td className="px-4">{legacy_customer_id}</td>
      <td className="py-3 px-4">{customer_name}</td>
      <td className="px-4">{company_name}</td>
      <td className="px-4">{vehicles_count}</td>
      <td className="px-4">{on_hand_count}</td>
      <td className="px-4">{on_the_way_count}</td>
      <td className="px-4">{arrived_count}</td>
      <td className="px-4">{phone}</td>
      <td className="px-4">{city_name}</td>
      <td className="px-4">
        <div className="flex items-center space-x-2">
          <label
            className={`relative inline-block w-11 h-4 rounded-full ${
              checked ? "bg-green-800" : "bg-gray-100"
            } border border-gray-400`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span
              className={`slider absolute cursor-pointer w-3 h-3  ${
                checked ? "bg-white" : "bg-gray-500"
              } rounded-full transition-transform duration-500  transform ${
                checked ? "translate-x-7" : ""
              }`}
            ></span>
          </label>
        </div>
      </td>
      <td className="px-1">
        <ViewButton></ViewButton>
      </td>
      <td className="px-1">
        <EditButton></EditButton>
      </td>
      <td className="px-1">
        <PasswordButton></PasswordButton>
      </td>
      <td className="px-1">
        <DeleteButtons></DeleteButtons>
      </td>
      <td className="px-4"></td>
    </tr>
  );
};

export default CustomerDataShow;
