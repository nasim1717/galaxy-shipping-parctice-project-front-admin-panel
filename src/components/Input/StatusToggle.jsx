/* eslint-disable react/prop-types */

const StatusToggle = ({ status, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label
        className={`relative inline-block w-8 h-4 rounded-full cursor-pointer ${
          status ? "bg-green-800" : "bg-gray-100"
        } border border-gray-400`}
      >
        <input type="checkbox" className="hidden" checked={status} onChange={onChange} />
        <span
          className={`slider absolute top-[.4px] cursor-pointer w-3 h-[13px]  ${
            status ? "bg-white" : "bg-gray-500"
          } rounded-full transition-transform duration-500  transform ${
            status ? "translate-x-4" : ""
          }`}
        ></span>
      </label>
    </div>
  );
};

export default StatusToggle;
