/* eslint-disable react/prop-types */
import Select from "react-select";

const InputSelectBox = ({
  options = [],
  isLoading,
  isClearable = true,
  placeholder,
  labelId,
  labelName,
}) => {
  return (
    <div className="text-[#6b7280] text-sm">
      <label htmlFor={labelId}>{labelName}</label>
      <div className="w-full text-[#6b7280] text-sm">
        <Select
          placeholder={placeholder}
          options={options}
          isClearable={isClearable}
          isLoading={isLoading}
        ></Select>
      </div>
    </div>
  );
};

export default InputSelectBox;
