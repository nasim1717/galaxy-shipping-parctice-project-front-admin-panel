import ViewButton from "../../components/Buttons/ViewButton";
import EditButton from "../../components/Buttons/EditButton";
import DeleteButtons from "../../components/Buttons/DeleteButtons";

// eslint-disable-next-line react/prop-types
const ConsigneeDataShow = ({ consignees, index, serial }) => {
  const { customer_name, consignee_name, consignee_address_1, phone, id } = consignees;
  const handleDelete = (id) => {};
  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="px-4">{serial}</td>
      <td className="px-4">{customer_name}</td>
      <td className="px-4">{consignee_name}</td>
      <td className="px-4">{consignee_address_1}</td>
      <td className="px-4">{phone}</td>
      <td className="py-2">
        <ViewButton></ViewButton>
      </td>
      <td className="px-1">
        <EditButton></EditButton>
      </td>
      <td onClick={() => handleDelete(id)} className="">
        <DeleteButtons></DeleteButtons>
      </td>
      <td></td>
    </tr>
  );
};

export default ConsigneeDataShow;
