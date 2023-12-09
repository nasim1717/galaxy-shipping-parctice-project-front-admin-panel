import DeleteButtons from "../../components/Buttons/DeleteButtons";
import EditButton from "../../components/Buttons/EditButton";
import ViewButton from "../../components/Buttons/ViewButton";

// eslint-disable-next-line react/prop-types
const TowingRatesDataShow = ({ towing, index, serial }) => {
  const { rate, country_name, state_name, city_name, location_name, status } = towing;
  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="px-4 py-3">{serial}</td>
      <td className="px-4">{rate}</td>
      <td className="px-4">{country_name}</td>
      <td className="px-4">{state_name}</td>
      <td className="px-4">{city_name}</td>
      <td className="px-4">{location_name}</td>
      <td className="px-4">
        <span
          className={`${
            status === 2 ? "bg-[#f97316]" : "bg-[#059669]"
          }  text-white rounded-lg px-2 py-[2px] text-xs`}
        >
          {status === 1 ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="py-2">
        <ViewButton></ViewButton>
      </td>
      <td className="px-2">
        <EditButton></EditButton>
      </td>
      <td>
        <DeleteButtons></DeleteButtons>
      </td>
      <td></td>
    </tr>
  );
};

export default TowingRatesDataShow;
