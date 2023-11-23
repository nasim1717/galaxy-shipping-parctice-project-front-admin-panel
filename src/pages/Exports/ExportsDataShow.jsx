import DeleteButtons from "../../components/Buttons/DeleteButtons";
import EditButton from "../../components/Buttons/EditButton";
import ViewButton from "../../components/Buttons/ViewButton";
import { IoDocumentTextOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const ExportsDataShow = ({ exports, index }) => {
  const {
    container_number,
    booking_number,
    terminal,
    vessel,
    loading_date,
    export_date,
    eta,
    status_name,
    customer_name,
  } = exports;
  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="px-4">{container_number}</td>
      <td className="px-4">{booking_number}</td>
      <td className="px-4">{customer_name}</td>
      <td className="px-4">{terminal}</td>
      <td className="px-4 ">{vessel}</td>
      <td className="px-4">{loading_date}</td>
      <td className="px-4">{export_date}</td>
      <td className="px-4">{eta}</td>
      <td className="px-4">{}</td>
      <td className="px-4">{}</td>
      <td className="px-4">{status_name}</td>
      <td className="px-4 text-green-600">{"Notes"}</td>
      <td className="px-4">
        <IoDocumentTextOutline className="text-gray-900 cursor-pointer" />
      </td>
      <td className=" py-2">
        <ViewButton></ViewButton>
      </td>
      <td className="px-1">
        <EditButton></EditButton>
      </td>
      <td className="">
        <DeleteButtons></DeleteButtons>
      </td>
    </tr>
  );
};

export default ExportsDataShow;
