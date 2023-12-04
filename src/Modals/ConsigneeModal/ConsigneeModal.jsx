import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";
import { BounceLoader } from "react-spinners";
import ConsigneeForm from "./ConsigneeForm";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { consigneeApi } from "../../features/consignee/consigneeApi";

// eslint-disable-next-line react/prop-types
const ConsigneeModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
    // console.log({ datas });
    setLoading(true);
    const data = {
      consignee_name: datas.consignee_name,
      customer_user_id: datas.customer_user_id.value.customerUserId,
      phone: datas.phone,
      country_id: datas.country.value.id,
      state_id: datas.state.value.id,
      city_id: datas.city.value.id,
    };
    dispatch(consigneeApi.endpoints.createConsignee.initiate(data))
      .unwrap()
      .then((data) => {
        handleClose(true);
        setLoading(false);
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
    methods.handleSubmit(onSubmit)();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center  backdrop-blur-sm bg-black bg-opacity-25 z-10`}
        >
          <div
            className={`bg-white rounded shadow-lg xl:w-7/12 w-11/12 h-3/4  mt-5 mb-2 relative  ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            }`}
          >
            <div className="flex justify-between py-3 px-2 font-medium ">
              <div>
                <p>Add Consignee</p>
              </div>
              <button
                onClick={() => handleClose(false)}
                className="text-gray-500  focus:outline-none"
              >
                <RxCross2 className="text-2xl"></RxCross2>
              </button>
            </div>

            <main className="mt-2 px-5 overflow-scroll h-[73%] w-full">
              <FormProvider {...methods}>
                <ConsigneeForm></ConsigneeForm>
              </FormProvider>
            </main>
            <div className="bg-white absolute bottom-0 right-0 py-2 px-3">
              <div onClick={handleFormSubmit} className="flex">
                <SearchBtn
                  name={"Save"}
                  loading={false}
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

export default ConsigneeModal;
