import { useState } from "react";
import Select from "react-select";

const customeStyles = {
  control: (styles) => ({ ...styles, paddingTop: "1px", paddingBottom: "1px", height: "1px" }),
};

const TowingInfo = () => {
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState([]);

  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Twing Info</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {/* towing request start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="TowingRequestDate">Towing Request Date</label>
          <input type="date" name="" id="TowingRequestDate" className="autos-modal-input" />
        </div>
        {/* towing request end */}
        {/* PickupDate start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="PickupDate">Pickup Date</label>
          <input type="date" name="" id="PickupDate" className="autos-modal-input" />
        </div>
        {/* PickupDate end */}
        {/* two by start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="TowBy">Tow By</label>
          <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-3 xl:pr-4">
            <div className="flex gap-x-2">
              <input type="radio" name="towBy" id="ByCustomer" />
              <label htmlFor="ByCustomer">By Customer</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="towBy" id="ByGalaxyShipping" checked />
              <label htmlFor="ByGalaxyShipping">By Galaxy Shipping</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="towBy" id="ShippingLine" />
              <label htmlFor="ShippingLine">Shipping Line</label>
            </div>
          </div>
        </div>
        {/* two by end */}
        {/* Delivery Date start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="DeliveryDate">Delivery Date</label>
          <input type="date" name="" id="DeliveryDate" className="autos-modal-input" />
        </div>
        {/* Delivery Date end */}
        {/* country start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="Country">Country</label>
          <p className="pr-[23rem]">cc</p>
        </div>
        {/* country end */}
        {/* Towed Fee start*/}
        <div className="autos-modal-inp-content">
          <label htmlFor="TowedFee">Towed Fee</label>
          <input
            type="text"
            name=""
            id="TowedFee"
            placeholder="Towed Fee"
            className="autos-modal-input"
          />
        </div>
        {/* Towed Fee end*/}
        {/* state start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="state">State</label>
          <div className="xl:w-96 md:w-72 w-48">
            <Select options={options} isClearable={true} styles={customeStyles}></Select>
          </div>
        </div>
        {/* state end */}
        {/* picture start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="pictures">Pictures</label>
          <div className="flex  gap-x-3 pr-72">
            <div className="flex gap-x-2">
              <input type="radio" name="pictures" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="pictures" id="no" checked />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* picture end */}
        {/* city start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="city">City</label>
          <div className="xl:w-96 md:w-72 w-48">
            <Select options={options} isClearable={true} styles={customeStyles}></Select>
          </div>
        </div>
        {/* city end */}
        {/* Towed start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="Towed">Towed</label>
          <div className="flex  gap-x-3 pr-72">
            <div className="flex gap-x-2">
              <input type="radio" name="towed" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="towed" id="no" checked />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* Towed end */}
        {/* yard start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="Yard">Yard</label>
          <select name="yard" id="Yard" className="autos-modal-input text-gray-700 ">
            <option value="">Select Yard</option>
            <option value={0}>WA</option>
            <option value={1}>VANCOUVER</option>
            <option value={2}>CALGARY</option>
            <option value={3}>EDMONTON</option>
            <option value={4}>HALIFAX</option>
            <option value={5}>MONTREAL</option>
            <option value={6}>TORONTO</option>
            <option value={7}>GA</option>
            <option value={8}>LA</option>
          </select>
        </div>
        {/* yard end*/}
        {/* key start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="key">Key</label>
          <div className="flex gap-x-3 pr-72">
            <div className="flex gap-x-2">
              <input type="radio" name="key" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="key" id="no" checked />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* key end */}
      </div>
    </div>
  );
};

export default TowingInfo;
