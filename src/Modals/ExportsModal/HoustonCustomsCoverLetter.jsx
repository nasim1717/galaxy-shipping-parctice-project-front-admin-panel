const HoustonCustomsCoverLetter = () => {
  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Houston Customs Cover Letter</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {/* Vehicle Location start */}
        <div className="export-modal-inp-content">
          <label htmlFor="VehicleLocation">Vehicle Location</label>
          <input
            type="text"
            id="VehicleLocation"
            placeholder="Vehicle Location"
            className="export-modal-input"
          />
        </div>
        {/* Vehicle Location end */}
        {/* ExporterId start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ExporterId">Exporter Id</label>
          <input
            type="text"
            id="ExporterId"
            placeholder="Exporter Id"
            className="export-modal-input"
          />
        </div>
        {/* ExporterId end */}
        {/* Exporter Type Issuer start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ExporterTypeIssuer">Exporter Type Issuer</label>
          <input
            type="text"
            id="ExporterTypeIssuer"
            placeholder="Exporter Type Issuer"
            className="export-modal-input"
          />
        </div>
        {/* Exporter Type Issuer end */}
        {/* Transportation Value start */}
        <div className="export-modal-inp-content">
          <label htmlFor="TransportationValue">Transportation Value</label>
          <input
            type="text"
            id="TransportationValue"
            placeholder="Transportation Value"
            className="export-modal-input"
          />
        </div>
        {/* Transportation Value end */}
        {/* Exporter Dob start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Exporter Dob">Exporter Dob</label>
          <input
            type="text"
            id="Exporter Dob"
            placeholder="Exporter Dob"
            className="export-modal-input"
          />
        </div>
        {/* Exporter Dob end */}
        {/* UltimateConsigneeDob start */}
        <div className="export-modal-inp-content">
          <label htmlFor="UltimateConsigneeDob">Ultimate Consignee Dob</label>
          <input
            type="text"
            id="UltimateConsigneeDob"
            placeholder="Ultimate Consignee Dob"
            className="export-modal-input"
          />
        </div>
        {/* UltimateConsigneeDob end*/}
        {/* Consignee start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Consignee">Consignee</label>
          <select type="text" id="Consignee" className="export-modal-input">
            <option value="">Select Consignee</option>
          </select>
        </div>
        {/* Consignee end */}
        <div className="export-modal-inp-content">
          <label htmlFor="NotifyParty">Notify Party</label>
          <select id="NotifyParty" className="export-modal-input">
            <option value="">Select Notify Party</option>
          </select>
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="ManifestConsignee">Manifest Consignee</label>
          <select className="export-modal-input">
            <option value="">Select Manifest Consignee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HoustonCustomsCoverLetter;
