/* eslint-disable react/prop-types */

import { cn } from "../../lib/cn";
import { MdErrorOutline } from "react-icons/md";

const InputBox = ({
  labelId = "",
  labelName = "",
  name = "",
  placeholder = "",
  className = "",
  register = () => {},
  errors,
  message,
}) => {
  return (
    <div className="text-[#6b7280] text-sm">
      <label htmlFor={labelId}>{labelName}</label>
      <div className="w-full relative">
        <input
          {...register(name, { required: message })}
          type="text"
          name={name}
          id={labelId}
          placeholder={placeholder}
          className={cn(
            `${
              errors?.[name] ? "input-text-error border-red-500" : ""
            } search-input w-full text-black py-[6px]`
          )}
        />
        {errors?.[name] && (
          <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
        )}
        {errors?.[name] && <p className="text-red-500 text-sm">{errors?.[name]?.message}</p>}
      </div>
    </div>
  );
};

export default InputBox;
