import { BiPencil } from "react-icons/bi";

const EditButton = () => {
  return (
    <button className="flex items-center text-[#4338ca] hover:bg-[#e2e8f0] py-2 px-4 bg-[#f8fafc] font-bold rounded">
      <span>
        <BiPencil className="mr-2 text-[20px]"></BiPencil>
      </span>
      Edit
    </button>
  );
};

export default EditButton;
