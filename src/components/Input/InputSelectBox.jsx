/* eslint-disable react/prop-types */
import Select from "react-select";

const InputSelectBox = ({
  options = [],
  isLoading = false,
  isClearable = true,
  placeholder,
  labelId,
  labelName,
  onChange,
  value,
  name,
  errors,
}) => {
  return (
    <div className="text-[#6b7280] text-sm">
      <label htmlFor={labelId}>{labelName}</label>
      <div className="w-full text-[#6b7280] text-sm">
        <Select
          onChange={onChange}
          value={value?.id ? { value: { id: value.id, name: value.name }, label: value.name } : ""}
          placeholder={placeholder}
          options={options}
          isClearable={isClearable}
          isLoading={isLoading}
        ></Select>
        {errors?.[name] && <p className="text-red-500 text-sm">{errors?.[name]?.message}</p>}
      </div>
    </div>
  );
};

export default InputSelectBox;
