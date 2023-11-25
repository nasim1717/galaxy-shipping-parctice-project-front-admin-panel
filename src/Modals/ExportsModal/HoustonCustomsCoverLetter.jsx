import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchApi } from "../../features/search/searchApi";
import { useFormContext, Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const HoustonCustomsCoverLetter = () => {
  const selectCustomer = useSelector((state) => state.exportsSlice.selectCustomer);
  const [consgineeOptions, setConsgineeOptions] = useState([]);
  const dispatch = useDispatch();
  const {
    formState: { errors },
    control,
    register,
  } = useFormContext();

  useEffect(() => {
    if (!selectCustomer?.customerUserId) {
      setConsgineeOptions([]);
    } else {
      dispatch(searchApi.endpoints.consigneSearch.initiate(selectCustomer.customerUserId))
        .unwrap()
        .then((data) => {
          setConsgineeOptions(data);
        })
        .catch((er) => console.log("consgine search Error", er));
    }
  }, [selectCustomer, dispatch]);

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
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <select
              {...register("consignee", { required: "Consignee is Required" })}
              type="text"
              id="Consignee"
              className={`export-modal-input text-[#6b7280] ${
                errors?.consignee && "input-text-error border-red-500"
              }`}
            >
              <option value="">Select Consignee</option>
              {consgineeOptions.map((consigne) => (
                <option key={consigne.id} value={consigne.id}>
                  {consigne.name}
                </option>
              ))}
            </select>
            {errors?.consignee && (
              <MdErrorOutline className="absolute top-2 right-5 text-red-500"></MdErrorOutline>
            )}
            {errors?.consignee && <p className="text-red-500 pt-1">{errors?.consignee?.message}</p>}
          </div>
        </div>
        {/* Consignee end */}
        <div className="export-modal-inp-content">
          <label htmlFor="NotifyParty">Notify Party</label>
          <select id="NotifyParty" className="export-modal-input text-[#6b7280]">
            <option value="">Select Notify Party</option>
          </select>
        </div>
        <div className="export-modal-inp-content">
          <label htmlFor="ManifestConsignee">Manifest Consignee</label>
          <select className="export-modal-input text-[#6b7280]">
            <option value="">Select Manifest Consignee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HoustonCustomsCoverLetter;
