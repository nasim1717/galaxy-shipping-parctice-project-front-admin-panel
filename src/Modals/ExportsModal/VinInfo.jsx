import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { BiGridVertical } from "react-icons/bi";
import { useGetVehiclesVinQuery, vehiclesApi } from "../../features/vehicles/vehiclesApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const VinInfo = ({ setVinIds, vinIds }) => {
  const { data: vin, isLoading } = useGetVehiclesVinQuery();
  const [allVins, setAllVins] = useState([]);
  const [selectVin, setSelectVin] = useState("");
  const [vehiclesDetails, setVehiclesDetails] = useState([]);
  const [vehiclesToogle, setVehiclesToogle] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (vin?.data) {
      const options = vin.data.map((data) => ({
        value: { id: data?.id, vin: data?.vin },
        label: data?.vin,
      }));
      setAllVins(options);
    }
  }, [vin?.data]);

  const handleVin = () => {
    if (selectVin) {
      dispatch(vehiclesApi.endpoints.getSingleVehicles.initiate(selectVin.id))
        .unwrap()
        .then((res) => {
          const vehclesLocation = vehiclesDetails.find(
            (data) => data.location_id === res.data.location_id
          );
          if (vehclesLocation || vehiclesDetails.length === 0) {
            const checkExistVehicle = vehiclesDetails.find((data) => data.id === res?.data.id);
            if (checkExistVehicle) {
              alert("Vehicle already exists!");
            } else {
              setVehiclesDetails([...vehiclesDetails, res.data]);
              setVinIds([...vinIds, res.data.id]);
              setSelectVin("");
            }
          } else {
            alert("Please multiple location not allowed");
            setSelectVin("");
          }
        })
        .catch((er) => console.log(er));
    } else {
      alert("Please select vin first");
    }
  };

  const handleDeletevin = (vehicleId) => {
    const filterVehicleDetails = vehiclesDetails.filter((data) => data.id !== vehicleId);
    // eslint-disable-next-line react/prop-types
    const removeVinId = vinIds.filter((id) => id !== vehicleId);
    setVinIds(removeVinId);
    setVehiclesDetails(filterVehicleDetails);
  };

  return (
    <div className="px-2">
      <hr className="border-gray-400 border-solid mb-3 " />
      <div className="flex flex-col gap-y-4 px-3 mb-5 items-center">
        <div className="flex gap-x-3">
          <div className="xl:w-96 md:w-72 sm:w-60 w-48 text-[#6b7280] text-sm">
            <Select
              onChange={(e) => {
                if (e?.value) {
                  setSelectVin(e?.value);
                } else {
                  setSelectVin("");
                }
              }}
              value={
                selectVin
                  ? { value: { id: selectVin.id, vin: selectVin.vin }, label: selectVin.vin }
                  : ""
              }
              placeholder="Select vin..."
              options={allVins}
              isClearable={true}
              isLoading={isLoading}
            ></Select>
          </div>
          <button onClick={handleVin} className="btn">
            Add
          </button>
        </div>
        <table>
          <thead>
            <tr className="text-black text-sm font-extralight border-b  px-3">
              <th className="px-2 pb-2"></th>
              <th className="px-2 pb-2">Year</th>
              <th className="px-2 pb-2">Make</th>
              <th className="px-2 pb-2">Model</th>
              <th className="px-2 pb-2">Color</th>
              <th className="px-2 pb-2">Vin</th>
              <th className="px-2 pb-2">Status</th>
              <th className="px-2 pb-2">Title Number</th>
              <th className="px-2 pb-2">Location</th>
              <th className="px-2 pb-2">Lot Number</th>
              <th className="px-2 pb-2">Customer Name</th>
              <th className="px-2 pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesDetails.map((vehicle) => (
              <tr
                key={vehicle.id}
                className={`text-sm border-b ${
                  vehiclesToogle.toggle && vehiclesToogle.toggleId === vehicle.id
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <td
                  onMouseLeave={() => {
                    setVehiclesToogle({ toggle: false, toggleId: vehicle.id });
                  }}
                  onMouseDown={() => {
                    setVehiclesToogle({ toggle: true, toggleId: vehicle.id });
                  }}
                  className="px-3 cursor-move"
                >
                  <BiGridVertical className="text-lg"></BiGridVertical>
                </td>
                <td className="px-3">{vehicle.year}</td>
                <td className="px-3">{vehicle.make}</td>
                <td className="px-3">{vehicle.model}</td>
                <td className="px-3">{vehicle.color}</td>
                <td className="px-3">{vehicle.vin}</td>
                <td className="px-3">{vehicle.status_name}</td>
                <td className="px-3">{vehicle.itle_number}</td>
                <td className="px-3">{vehicle.location}</td>
                <td className="px-3">{vehicle.lot_number}</td>
                <td className="px-3">{vehicle.customer_name}</td>
                <td className="py-2 px-3">
                  <button
                    onClick={() => handleDeletevin(vehicle.id)}
                    className="btn bg-[#f97316] px-2"
                  >
                    <RxCross2 className="text-base"></RxCross2>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-gray-400 border-solid mb-3" />
    </div>
  );
};

export default VinInfo;
