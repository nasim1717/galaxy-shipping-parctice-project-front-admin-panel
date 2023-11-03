import { MdOutlineDelete } from "react-icons/md";

const DeleteButtons = () => {
  return (
    <button className="flex items-center text-[#f97316] py-2 px-4 hover:bg-[#e2e8f0] bg-[#f8fafc] font-bold rounded">
      <span>
        <MdOutlineDelete className="mr-2 text-[17px]"></MdOutlineDelete>
      </span>
      Delete
    </button>
  );
};

export default DeleteButtons;
