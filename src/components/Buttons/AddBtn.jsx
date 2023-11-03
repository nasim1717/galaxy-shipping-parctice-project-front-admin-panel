import { AiOutlinePlusCircle } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const AddBtn = ({ name }) => {
  return (
    <button className="btn bg-[#e7eee7] text-[#4338ca] font-bold hover:bg-[#4338ca] hover:text-white">
      <AiOutlinePlusCircle className="text-base"></AiOutlinePlusCircle>
      <span>{name}</span>
    </button>
  );
};

export default AddBtn;
