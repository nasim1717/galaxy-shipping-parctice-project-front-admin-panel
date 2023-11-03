import { AiOutlineFileText } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ExportBtn = ({ name }) => {
  return (
    <button className="btn bg-[#f59e0b] hover:bg-[#fcd34d]">
      <AiOutlineFileText></AiOutlineFileText>
      <span>{name}</span>
    </button>
  );
};

export default ExportBtn;
