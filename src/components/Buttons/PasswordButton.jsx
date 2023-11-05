import { CiSettings } from "react-icons/ci";

const PasswordButton = () => {
  return (
    <button className="flex items-center text-[#dc2626] hover:bg-red-50 py-2 px-3 bg-[#f8fafc] font-bold rounded">
      <span>
        <CiSettings className="mr-2 text-[20px]"></CiSettings>
      </span>
      Password
    </button>
  );
};

export default PasswordButton;
