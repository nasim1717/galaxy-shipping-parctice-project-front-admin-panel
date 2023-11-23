const DockReciptMoreinfo = () => {
  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Dock Recipt-More info</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {/* B/L or AWB Number start */}
        <div className="export-modal-inp-content">
          <label htmlFor="B/LorAWBNumber">B/L or AWB Number</label>
          <input
            type="text"
            id="LorAWBNumber"
            placeholder="B/L or AWB Number"
            className="export-modal-input"
          />
        </div>
        {/* B/L or AWB Number end */}
        {/* Export Reference start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ExportReference">Export Reference</label>
          <input
            type="text"
            id="ExportReference"
            placeholder="Export Reference"
            className="export-modal-input"
          />
        </div>
        {/* Export Reference end */}
        {/* Forwarding Agent start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ForwardingAgent">Forwarding Agent</label>
          <textarea
            type="text"
            id="ForwardingAgent"
            placeholder="Forwarding Agent"
            className="export-modal-input"
          />
        </div>
        {/* Forwarding Agent end */}
        {/* Domestic Routing Instructions start */}
        <div className="export-modal-inp-content">
          <label htmlFor="DomesticRoutingInstructions">Domestic Routing Instructions</label>
          <textarea
            type="text"
            id="DomesticRoutingInstructions"
            placeholder="Domestic Routing Instructions"
            className="export-modal-input"
          />
        </div>
        {/* Domestic Routing Instructions end */}
        {/* Pre Carriage By starty */}
        <div className="export-modal-inp-content">
          <label htmlFor="PreCarriageBy">Pre Carriage By</label>
          <input
            type="text"
            id="PreCarriageBy"
            placeholder="Pre Carriage By"
            className="export-modal-input"
          />
        </div>
        {/* Pre Carriage By end */}
        {/* Place of Receipt by Pre Carrier start */}
        <div className="export-modal-inp-content">
          <label htmlFor="PlaceofReceiptbyPreCarrier">Place of Receipt by Pre Carrier</label>
          <input
            type="text"
            id="PlaceofReceiptbyPreCarrier"
            placeholder="Place of Receipt by Pre Carrier"
            className="export-modal-input"
          />
        </div>
        {/* Place of Receipt by Pre Carrier end */}
        {/* Final Destination start */}
        <div className="export-modal-inp-content">
          <label htmlFor="FinalDestination">Final Destination</label>
          <input
            type="text"
            id="FinalDestination"
            placeholder="FinalDestination"
            className="export-modal-input"
          />
        </div>
        {/* Final Destination end */}
        {/* Loading Terminal start */}
        <div className="export-modal-inp-content">
          <label htmlFor="LoadingTerminal">Loading Terminal</label>
          <input
            type="text"
            id="LoadingTerminal"
            placeholder="Loading Terminal"
            className="export-modal-input"
          />
        </div>
        {/* Loading Terminal end */}
        {/* Container Type start */}
        <div className="export-modal-inp-content">
          <label htmlFor="ContainerType">Container Type</label>
          <input
            type="text"
            id="ContainerType"
            placeholder="Container Type"
            className="export-modal-input"
          />
        </div>
        {/* Container Type end */}
        {/* Number of Packages start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Number of Packages">Number of Packages</label>
          <input
            type="text"
            id="Number of Packages"
            placeholder="Number of Packages"
            className="export-modal-input"
          />
        </div>
        {/* Number of Packages end */}
        {/* By start */}
        <div className="export-modal-inp-content">
          <label htmlFor="By">By</label>
          <input type="text" id="By" placeholder="By" className="export-modal-input" />
        </div>
        {/* By end */}
        {/* Exporting Carrier end */}
        <div className="export-modal-inp-content">
          <label htmlFor="Exporting Carrier">Exporting Carrier</label>
          <input
            type="text"
            id="Exporting Carrier"
            placeholder="Exporting Carrier"
            className="export-modal-input"
          />
        </div>
        {/* Exporting Carrier start */}
        {/* Date start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Date">Date</label>
          <input type="date" id="Date" className="export-modal-input" />
        </div>
        {/* Date end */}
        {/* AutoReceivingDate start */}
        <div className="export-modal-inp-content">
          <label htmlFor="AutoReceivingDate">Auto Receiving Date</label>
          <input type="date" id="AutoReceivingDate" className="export-modal-input" />
        </div>
        {/* AutoReceivingDate end */}
        {/* Auto Cut Off start */}
        <div className="export-modal-inp-content">
          <label htmlFor="AutoCutOff">Auto Cut Off</label>
          <input type="date" id="AutoCutOff" className="export-modal-input" />
        </div>
        {/* Auto Cut Off end */}
        {/* Vessel Cut Off start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Vessel Cut Off">Vessel Cut Off</label>
          <input type="date" id="LorAWBNumber" className="export-modal-input" />
        </div>
        {/* Vessel Cut Off end */}
        {/* Sale Date start */}
        <div className="export-modal-inp-content">
          <label htmlFor="Sale Date">Sale Date</label>
          <input type="date" id="SaleDate" className="export-modal-input" />
        </div>
        {/* Sale Date end */}
      </div>
    </div>
  );
};

export default DockReciptMoreinfo;
