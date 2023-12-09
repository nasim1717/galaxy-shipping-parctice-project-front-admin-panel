import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CustomerInfo } from "./CustomerInfo";
import VehicleInfo from "./VehicleInfo";
import TowingInfo from "./TowingInfo";
import TitleInfo from "./TitleInfo";
import CheckOptions from "./CheckOptions";
import ConditionVehicles from "./ConditionVehicles";
import Photos from "./Photos";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";
import Documents from "./Documents";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { vehiclesApi } from "../../features/vehicles/vehiclesApi";
import { BounceLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const AutosModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = (success) => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      methods.reset();
      onClose(success);
    }, 100);
  };

  const onSubmit = (datas) => {
    // console.log(datas);
    setLoading(true);
    const data = {
      vin: datas.vin,
      location_id: datas.location_id,
      lot_number: datas.lot_number,
      make: datas.make,
      model: datas.model,
      customer_user_id: datas.customer_user_id.value.customer_user_id,
      year: datas.year,
    };
    console.log(data);
    dispatch(vehiclesApi.endpoints.addVehicle.initiate(data))
      .unwrap()
      .then((res) => {
        setLoading(false);
        handleClose(true);
      })
      .catch((error) => {
        if (error?.data?.errors) {
          Object.keys(error?.data?.errors).forEach((field) => {
            if (error?.data?.errors[field]) {
              methods.setError(field, { message: error?.data?.errors[field][0] });
            } else {
              methods.clearErrors(field);
            }
          });
        }
        setLoading(false);
      });
  };

  const handleFormSubmit = () => {
    if (!loading) {
      methods.handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-25 z-50 `}
        >
          <div
            className={` bg-white rounded shadow-lg xl:w-9/12 w-11/12 h-[94%] mt-2 mb-2 relative  ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            }`}
          >
            <div className="flex justify-between py-3 px-2 font-medium">
              <div>
                <p>Add Auto</p>
              </div>
              <button
                onClick={() => handleClose(false)}
                className="text-gray-500  focus:outline-none"
              >
                <RxCross2 className="text-2xl"></RxCross2>
              </button>
            </div>

            <main className="mt-2 overflow-scroll h-[83%]">
              <FormProvider {...methods}>
                <CustomerInfo></CustomerInfo>
                <hr className="border-gray-400 border-solid mb-3" />
                <VehicleInfo></VehicleInfo>
                <hr className="border-gray-400 border-solid mb-3" />
                <TowingInfo></TowingInfo>
                <hr className="border-gray-400 border-solid mb-3" />
                <TitleInfo></TitleInfo>
                <hr className="border-gray-400 border-solid mb-3" />
                <CheckOptions></CheckOptions>
                <ConditionVehicles></ConditionVehicles>
                <hr className="border-gray-400 border-solid mb-3" />
                <Photos></Photos>
                <hr className="border-gray-400 border-solid mb-3" />
                <Documents></Documents>
              </FormProvider>
            </main>
            <div onClick={handleFormSubmit} className="bg-white absolute bottom-4 right-0 px-3">
              <div className="flex">
                <SearchBtn
                  name={"Save"}
                  loading={loading}
                  icon={<AiOutlinePlus className="font-extrabold text-base"></AiOutlinePlus>}
                ></SearchBtn>
                {loading && (
                  <BounceLoader color="#e3e3d0" size={25} className="absolute right-8 top-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AutosModal;
