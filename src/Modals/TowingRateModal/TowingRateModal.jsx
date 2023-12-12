import { BounceLoader } from "react-spinners";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import TowingRateForm from "./TowingRateForm";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { towinRatesApi } from "../../features/towinRates/towingRatesApi";

// eslint-disable-next-line react/prop-types
const TowingRateModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm();
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
    console.log(datas);
    setLoading(true);
    const data = {
      rate: datas.rate,
      country_id: datas.country.value.id,
      city_id: datas.city.value.id,
      state_id: datas.state.value.id,
      location_id: datas.yard.value.id,
      status: datas.status ? 1 : 2,
    };
    dispatch(towinRatesApi.endpoints.createTowingRate.initiate(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        setLoading(false);
        handleClose(res.message);
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
    console.log(data);
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
          className={`fixed top-0 left-0 w-full h-full flex justify-center  backdrop-blur-sm bg-black bg-opacity-25 z-10`}
        >
          <div
            className={`bg-white rounded shadow-lg xl:w-9/12 w-11/12 h-3/4  mt-5 mb-2 relative  ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            }`}
          >
            <div className="flex justify-between py-3 px-2 font-medium ">
              <div>
                <p>Add Towing Rate</p>
              </div>
              <button
                onClick={() => handleClose(false)}
                className="text-gray-500  focus:outline-none"
              >
                <RxCross2 className="text-2xl"></RxCross2>
              </button>
            </div>

            <main className="mt-2 px-3 overflow-scroll h-[77.9%] w-full">
              <FormProvider {...methods}>
                <TowingRateForm></TowingRateForm>
              </FormProvider>
            </main>
            <div className="bg-white absolute bottom-0 right-0 py-2 px-3">
              <div onClick={handleFormSubmit} className="flex">
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

export default TowingRateModal;
