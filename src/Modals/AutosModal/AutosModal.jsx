import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CustomerInfo } from "./CustomerInfo";
import VehicleInfo from "./VehicleInfo";
import TowingInfo from "./TowingInfo";

// eslint-disable-next-line react/prop-types
const AutosModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 100);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-25 z-10 `}
        >
          <div
            className={`bg-white  rounded shadow-lg xl:w-9/12 w-10/12 h-[95%] mt-2 mb-2 ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            }`}
          >
            <div className="flex justify-between py-3 px-2 font-medium">
              <div>
                <p>Add Auto</p>
              </div>
              <button onClick={handleClose} className="text-gray-500  focus:outline-none">
                <RxCross2 className="text-2xl"></RxCross2>
              </button>
            </div>

            <main className="mt-2 overflow-scroll h-5/6">
              <CustomerInfo></CustomerInfo>
              <hr className="border-gray-400 border-solid mb-3" />
              <VehicleInfo></VehicleInfo>
              <hr className="border-gray-400 border-solid mb-3" />
              <TowingInfo></TowingInfo>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AutosModal;
