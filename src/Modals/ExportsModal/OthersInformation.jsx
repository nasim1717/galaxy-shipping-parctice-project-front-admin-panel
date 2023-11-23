import { exportContainerType } from "../../helper/selectOption";

const OthersInformation = () => {
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
          <select name="" id="" className="export-modal-input">
            <option value="">Container Type</option>
            {exportContainerType.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
