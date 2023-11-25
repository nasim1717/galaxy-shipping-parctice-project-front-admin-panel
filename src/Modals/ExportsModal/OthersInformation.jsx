import { exportContainerType } from "../../helper/selectOption";
import { useFormContext, Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const OthersInformation = () => {
  const {
    formState: { errors },
    control,
    register,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Others Information</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <div className="export-modal-inp-content">
          <label htmlFor="SpecialInstruction">Special Instruction</label>
          <textarea
            type="text"
            id="SpecialInstruction"
            placeholder="Special Instruction"
            className="export-modal-input"
          />
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="BookingNumber">Container Type</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <select
              {...register("container_type", { required: "Container type is Required" })}
              className={`export-modal-input text-[#6b7280] ${
                errors?.container_type && "input-text-error border-red-500"
              }`}
            >
              <option value="">Container Type</option>
              {exportContainerType.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors?.container_type && (
              <MdErrorOutline className="absolute top-2 right-5 text-red-500"></MdErrorOutline>
            )}
            {errors?.container_type && (
              <p className="text-red-500 pt-1">{errors?.container_type?.message}</p>
            )}
          </div>
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="BolNote">Bol Note</label>
          <input type="text" id="BolNote" placeholder="Bol Note" className="export-modal-input" />
        </div>
      </div>
    </div>
  );
};

export default OthersInformation;
