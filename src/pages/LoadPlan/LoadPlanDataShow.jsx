import Button1 from "../../components/Buttons/Button1";
import Button2 from "../../components/Buttons/Button2";
import { IoMdInformationCircle } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { GiJoystick } from "react-icons/gi";
import Button3 from "../../components/Buttons/Button3";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const LoadPlanDataShow = ({ loadPlans, index }) => {
  const {
    customer_name,
    plan_number,
    export_date,
    port_of_loading_name,
    port_of_discharge_name,
    status_name,
  } = loadPlans;
  return (
    <tr className={`${index % 2 === 0 && "bg-gray-100"} rounded-md  text-[#4b5563]`}>
      <td className="py-2 px-4">
        <Button2
          name={"info"}
          icon={<IoMdInformationCircle className="mr-2 text-[20px]" />}
        ></Button2>
      </td>
      <td className="py-3 px-4">{customer_name}</td>
      <td className="px-4">{plan_number}</td>
      <td className="px-4">{export_date}</td>
      <td className="px-4">{port_of_loading_name}</td>
      <td className="px-4">{port_of_discharge_name}</td>
      <td className="px-4 ">
        <span className="bg-[#059669] text-white text-[10px] px-2 py-[1px] rounded-md font-bold">
          {status_name}
        </span>
      </td>
      <td>
        <Button1 name={"Edit"} icon={<BiPencil className="mr-2 text-[20px]"></BiPencil>}></Button1>
      </td>
      <td className="pr-3">
        <Button2 name={"Accept"} icon={<GiJoystick className="mr-2 text-[20px]" />}></Button2>
      </td>
      <td>
        <Button3 name={"Reject"} icon={<MdDelete className="mr-2 text-[20px]" />}></Button3>
      </td>
      <td className="min-w-[50px]"></td>
    </tr>
  );
};

export default LoadPlanDataShow;
