import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";
import { BounceLoader } from "react-spinners";
import ExportInfo from "./ExportInfo";
import OthersInformation from "./OthersInformation";
import DockReciptMoreinfo from "./DockReciptMoreinfo";
import HoustonCustomsCoverLetter from "./HoustonCustomsCoverLetter";
import ExportsFilesManage from "./ExportsFilesManage";
import ExportTerminal from "./ExportTerminal";

// eslint-disable-next-line react/prop-types
const ExportsModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = (success) => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose(success);
    }, 100);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-25 z-10`}
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
            <hr className="border-gray-400 border-solid mb-3" />
            <main className="mt-2 overflow-scroll h-[83%]">
              <ExportInfo></ExportInfo>
              <hr className="border-gray-400 border-solid mb-3" />
              <OthersInformation></OthersInformation>
              <hr className="border-gray-400 border-solid mb-3" />
              <ExportTerminal></ExportTerminal>
              <hr className="border-gray-400 border-solid mb-3" />
              <DockReciptMoreinfo></DockReciptMoreinfo>
              <hr className="border-gray-400 border-solid mb-3" />
              <HoustonCustomsCoverLetter></HoustonCustomsCoverLetter>
              <hr className="border-gray-400 border-solid mb-3" />
              <ExportsFilesManage></ExportsFilesManage>
            </main>
            <div className="bg-white absolute bottom-4 right-0 px-3">
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

export default ExportsModal;
