import ViewButton from "../../components/Buttons/ViewButton";

// eslint-disable-next-line react/prop-types
const ContainersDataShow = ({ container, index, serial }) => {
  const {
    loading_date,
    export_date,
    eta,
    booking_number,
    container_number,
    terminal,
    vessel,
    destination,
    note,
  } = container;
  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="px-4">{serial}</td>
      <td className="px-4">{loading_date}</td>
      <td className="px-4">{export_date}</td>
      <td className="px-4">{eta}</td>
      <td className="px-4">{booking_number}</td>
      <td className="px-4 text-[#059669] font-bold">{container_number}</td>
      <td className="px-4">{terminal}</td>
      <td className="px-4">{vessel}</td>
      <td className="px-4">{destination}</td>
      <td className="px-4 text-[#059669]">{note ? note : "Notes"}</td>
      <td className="px-1 py-2">
        <ViewButton></ViewButton>
      </td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default ContainersDataShow;
