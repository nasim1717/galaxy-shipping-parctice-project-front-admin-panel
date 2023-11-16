import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

const VehicleInfo = () => {
  const [numericValue, setNumericValue] = useState("");
  const [numericValueYear, setNumericValueYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    setNumericValue(inputValue);
  };
  const handleInputChangeYear = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    setNumericValueYear(inputValue);
  };

  const handleAutoFill = async () => {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vin}?format=json`
    );
    const data = await res.json();
    setModel(data.Results[0].Model);
    setMake(data.Results[0].Make);
    setNumericValueYear(data.Results[0].ModelYear);
  };

  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Vehicle Info</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {/* status start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="status">Status</label>
          <select name="cars" id="status" className="autos-modal-input text-gray-700 ">
            <option value={0}>ON HAND</option>
            <option value={1}>READY TO LOAD</option>
            <option value={2}>ON THE WAY</option>
            <option value={3}>LOADED</option>
            <option value={4} selected>
              NEW PURCHASED
            </option>
            <option value={5}>PORT ARRIVAL</option>
            <option value={6}>YARD ARRIVAL</option>
            <option value={7}>IS REQUESTED</option>
            <option value={8}>DISPATCHED</option>
            <option value={9}>RELISTED</option>
            <option value={10}>HANDED OVER</option>
          </select>
        </div>
        {/* status end */}
        {/* value start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="value">Value</label>
          <input
            onChange={handleInputChange}
            value={numericValue}
            type="text"
            id="value"
            placeholder="Value"
            className="autos-modal-input"
          />
        </div>
        {/* value end */}
        {/* condition start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="condition">Condition</label>
          <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-3 xl:pr-48">
            <div className="flex gap-x-2">
              <input type="radio" name="condition" id="Operable" />
              <label htmlFor="Operable">Operable</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="condition" id="NonOperable" checked />
              <label htmlFor="NonOperable">Non Operable</label>
            </div>
          </div>
        </div>
        {/* condition end */}
        {/* lot not start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="lotno">Lot No</label>
          <div className="relative xl:w-96 md:w-72 sm:w-60 w-48">
            <input
              {...register("lot_number", { required: "Lot can not be blank" })}
              type="text"
              id="lotno"
              placeholder="Lot No"
              className={`autos-modal-input ${
                errors?.lot_number && "input-text-error border-red-500"
              }`}
            />
            {errors?.lot_number && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.lot_number && <p className="text-red-500">{errors?.lot_number?.message}</p>}
          </div>
        </div>
        {/* lot end */}
        {/* damaged start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="damaged">Damaged</label>
          <div className="flex  gap-x-3 pr-72">
            <div className="flex gap-x-2">
              <input type="radio" name="damaged" id="yes" checked />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="damaged" id="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* damaged end */}
        {/* Hat start*/}
        <div className="autos-modal-inp-content">
          <label htmlFor="hat">Hat</label>
          <input type="text" id="hat" placeholder="Hat" className="autos-modal-input" />
        </div>
        {/* Hat end */}
        {/* Purchase Date start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="purchasedate">Purchase Date</label>
          <input type="date" className="autos-modal-input" />
        </div>
        {/* Purchase Date end */}
        {/* check no start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="checkno">Check No</label>
          <input type="text" id="checkno" placeholder="Check No" className="autos-modal-input" />
        </div>
        {/* check start no */}
        {/* vin no start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="vin">VIN</label>
          <div className="flex xl:gap-x-2 xl:flex-row gap-y-2 flex-col">
            <div
              className={` ${
                vin.length >= 17 ? "xl:w-[18.4rem] md:w-72 sm:w-60" : "xl:w-96  md:w-72 sm:w-60"
              } relative`}
            >
              <Controller
                name="vin"
                control={control}
                rules={{
                  required: "Vin can not be blank",
                  minLength: {
                    value: 17,
                    message: "Vin must be 17 character",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setVin(e.target.value);
                      }}
                      value={vin}
                      type="text"
                      id="vin"
                      placeholder="VIN"
                      className={`autos-modal-input ${
                        vin.length >= 17
                          ? "xl:w-[18.4rem] md:w-72 sm:w-60"
                          : "xl:w-96  md:w-72 sm:w-60"
                      } ${errors?.vin && "input-text-error border-red-500"}`}
                    />
                  </>
                )}
              ></Controller>
              {errors?.vin && (
                <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
              )}
              {errors?.vin && <p className="text-red-500">{errors?.vin?.message}</p>}
            </div>
            {vin.length >= 17 && (
              <button
                onClick={handleAutoFill}
                className="btn flex justify-center items-center py-1 text-center max-[1279px]:w-72  max-[767px]:w-60 max-[639px]:w-48"
              >
                Auto Fill
              </button>
            )}
          </div>
        </div>
        {/* vin no end */}
        {/*Buyer No start  */}
        <div className="autos-modal-inp-content">
          <label htmlFor="buyerno">Buyer No</label>
          <input type="text" id="buyerno" placeholder="Buyer No" className="autos-modal-input" />
        </div>
        {/* Buyer No end */}
        {/* year start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="year">Year</label>
          <div className="xl:w-96 md:w-72 sm:w-60 w-48 relative">
            <Controller
              name="year"
              control={control}
              rules={{
                required: "Year can not be blank",
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleInputChangeYear(e);
                    }}
                    value={numericValueYear ? numericValueYear : ""}
                    type="text"
                    id="year"
                    placeholder="Year"
                    className={`autos-modal-input ${
                      errors?.year && "input-text-error border-red-500"
                    }`}
                  />
                </>
              )}
            ></Controller>

            {errors?.year && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.year && <p className="text-red-500">{errors?.year?.message}</p>}
          </div>
        </div>
        {/* year end */}
        {/* action name */}
        <div className="autos-modal-inp-content">
          <label htmlFor="actionname">Auction Name</label>
          <select name="actionname" id="actionname" className="autos-modal-input text-gray-700">
            <option value="">Select Auction</option>
            <option value="saab">Copart</option>
            <option value="mercedes">IAA</option>
          </select>
        </div>
        {/* action name end */}
        {/* make start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="make">Make</label>
          <div className="xl:w-96 md:w-72 sm:w-60 w-48 relative">
            <Controller
              name="make"
              control={control}
              rules={{
                required: "Make can not be blank",
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setMake(e.target.value);
                    }}
                    value={make}
                    type="text"
                    id="make"
                    placeholder="Make"
                    className={`autos-modal-input ${
                      errors?.year && "input-text-error border-red-500"
                    }`}
                  />
                </>
              )}
            ></Controller>

            {errors?.make && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.make && <p className="text-red-500">{errors?.make?.message}</p>}
          </div>
        </div>
        {/* make end */}
        {/* Storage Amount start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="storageamount">Storage Amount</label>
          <input
            type="text"
            id="storageamount"
            placeholder="Storage Amount"
            className="autos-modal-input"
          />
        </div>
        {/* Storage Amount end */}
        {/* model start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="model">Model</label>
          <div className="xl:w-96 md:w-72 sm:w-60 w-48 relative">
            <Controller
              name="model"
              control={control}
              rules={{
                required: "Model can not be blank",
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setModel(e.target.value);
                    }}
                    value={model}
                    type="text"
                    id="model"
                    placeholder="Model"
                    className={`autos-modal-input ${
                      errors?.model && "input-text-error border-red-500"
                    }`}
                  />
                </>
              )}
            ></Controller>

            {errors?.model && (
              <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
            )}
            {errors?.model && <p className="text-red-500">{errors?.model?.message}</p>}
          </div>
        </div>
        {/* model end */}
        {/* Add CHGS start*/}
        <div className="autos-modal-inp-content">
          <label htmlFor="AddCHGS">Add CHGS</label>
          <input type="number" id="AddCHGS" placeholder="Add CHGS" className="autos-modal-input" />
        </div>
        {/* Add CHGS end*/}
        {/* color start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="color">Color</label>
          <select name="color" id="color" className="autos-modal-input text-gray-700">
            <option value="">Select Color</option>
            <option value={0}>BEIGE</option>
            <option value={1}>BLACK</option>
            <option value={2}>BLACK & RED</option>
            <option value={3}>BLUE</option>
            <option value={4}>BLUE & GRAY</option>
            <option value={5}>BROWN</option>
            <option value={6}>BURGUNDY</option>
            <option value={7}>CHARCOAL</option>
            <option value={8}>CREAM</option>
            <option value={9}>DARK RED</option>
            <option value={10}>DARK BLUE</option>
            <option value={11}>DARK PURPLE</option>
            <option value={12}>GOLD</option>
            <option value={13}>GOLDEN</option>
            <option value={14}>GRAY</option>
            <option value={15}>GREEN</option>
            <option value={16}>MAROON</option>
            <option value={17}>NAVY</option>
            <option value={18}>NAVY BLUE</option>
            <option value={19}>ORANGE</option>
            <option value={20}>PEARL</option>
            <option value={21}>PURPLE</option>
            <option value={22}>RED</option>
            <option value={23}>RED & WHITE</option>
            <option value={24}>SILVER</option>
            <option value={25}>TRN</option>
            <option value={26}>WHITE</option>
            <option value={27}>YELLOW</option>
            <option value={28}>Brick red</option>
            <option value={29}>Blue-green</option>
            <option value={30}>Blue-violet</option>
            <option value={31}>Bronze</option>
            <option value={32}>Copper</option>
            <option value={33}>Cyan</option>
            <option value={34}>Indigo</option>
            <option value={35}>Lvory</option>
            <option value={36}>Orange-red</option>
            <option value={37}>Pink</option>
            <option value={38}>Red-violet</option>
            <option value={39}>violet</option>
          </select>
        </div>
        {/* color end */}
        {/* service end */}
        <div className="autos-modal-inp-content">
          <label htmlFor="ServiceProvider">Service Provider</label>
          <input
            type="text"
            id="ServiceProvider"
            placeholder="Service Provider"
            className="autos-modal-input"
          />
        </div>
        {/* Service end */}
        {/* weight start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="weight">Weight</label>
          <input type="text" id="weight" placeholder="Weight" className="autos-modal-input" />
        </div>
        {/* weight end */}
      </div>
    </div>
  );
};

export default VehicleInfo;
