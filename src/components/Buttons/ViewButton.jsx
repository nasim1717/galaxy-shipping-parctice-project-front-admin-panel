import { MdOutlineRemoveRedEye } from "react-icons/md";

const ViewButton = () => {
  return (
    <button className="flex items-center text-[#059669] py-2 px-4 hover:bg-[#e2e8f0] bg-[#f8fafc] font-bold rounded">
      <span>
        <MdOutlineRemoveRedEye className="mr-2 text-[20px]"></MdOutlineRemoveRedEye>
      </span>
      View
    </button>
  );
};

export default ViewButton;
