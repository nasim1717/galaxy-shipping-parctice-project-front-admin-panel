import DeleteButtons from "../../components/Buttons/DeleteButtons";
import EditButton from "../../components/Buttons/EditButton";
import ViewButton from "../../components/Buttons/ViewButton";

// eslint-disable-next-line react/prop-types
const AutosDataShow = ({ vehicles, index }) => {
  const {
    photo,
    customer_name,
    vin,
    lot_number,
    year,
    make,
    model,
    purchase_date,
    deliver_date,
    keys_name,
    location: yard,
    auction_at,
    container_number,
    status_name,
    title_type_name,
    service_provider,
  } = vehicles;

  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="px-4"></td>
      <td className="px-4">
        <img src={photo} alt="" className="min-w-[80px] h-16 py-1" />
      </td>
      <td className="px-4">{customer_name}</td>
      <td className="px-4 text-green-600">{lot_number}</td>
      <td className="px-4 text-green-600">{vin}</td>
      <td className="px-4">{year}</td>
      <td className="px-4">{make}</td>
      <td className="px-4">{model}</td>
      <td className="px-4">{purchase_date}</td>
      <td className="px-4">{deliver_date}</td>
      <td className="px-4">{keys_name}</td>
      <td className="px-4">{yard}</td>
      <td className="px-4">{auction_at}</td>
      <td className="px-4">{container_number}</td>
      <td className="px-4">{status_name}</td>
      <td className="px-4">{title_type_name}</td>
      <td className="px-4">{service_provider}</td>
      <td className="px-4 text-green-600">
        <span>chat</span>
      </td>
      <td></td>
      <td>
        <ViewButton></ViewButton>
      </td>
      <td>
        <EditButton></EditButton>
      </td>
      <td>
        <DeleteButtons></DeleteButtons>
      </td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default AutosDataShow;
