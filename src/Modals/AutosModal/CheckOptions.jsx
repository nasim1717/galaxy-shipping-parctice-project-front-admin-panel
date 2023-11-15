const CheckOptions = () => {
  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Check options included on the vehicle</p>
      <div className="grid sm:grid-cols-4 grid-cols-3 gap-x-6 gap-y-5 text-[#6b7280] text-sm">
        <div>
          <input type="checkbox" id="keys" name="keys" value="keys" />
          <label htmlFor="keys" className="px-1">
            Keys
          </label>
        </div>
        <div>
          <input type="checkbox" id="CDChanger" name="CdChanger" value="CD Changer" />
          <label htmlFor="CDChanger" className="px-1">
            CD Changer
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="GPSNavigationSystem"
            name="GPSNavigationSystem"
            value="GPS Navigation System"
          />
          <label htmlFor="GPSNavigationSystem" className="px-1">
            GPS Navigation System
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="SpareTire/Jack"
            name="SpareTire/Jack"
            value="Spare Tire/Jack"
          />
          <label htmlFor="SpareTire/Jack" className="px-1">
            Spare Tire/Jack
          </label>
        </div>
        <div>
          <input type="checkbox" id="WheelCovers" name="WheelCovers" value="Wheel Covers" />
          <label htmlFor="WheelCovers" className="px-1">
            Wheel Covers
          </label>
        </div>
        <div>
          <input type="checkbox" id="Radio" name="Radio" value="Radio" />
          <label htmlFor="Radio" className="px-1">
            Radio
          </label>
        </div>
        <div>
          <input type="checkbox" id="CDPlayer" name="CDPlayer" value="CD Player" />
          <label htmlFor="CDPlayer" className="px-1">
            CD Player
          </label>
        </div>
        <div>
          <input type="checkbox" id="Mirror" name="Mirror" value="Mirror" />
          <label htmlFor="Mirror" className="px-1">
            Mirror
          </label>
        </div>
        <div>
          <input type="checkbox" id="Speaker" name="Speaker" value="Speaker" />
          <label htmlFor="Speaker" className="px-1">
            Speaker
          </label>
        </div>
        <div>
          <input type="checkbox" id="Other" name="Other" value="Other" />
          <label htmlFor="keys" className="px-1">
            Other...
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckOptions;
