import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import { createUploadFrileUrl, handelRemoveFile } from "../../helper/helper";

const Photos = () => {
  const [auctionPhotos, setAuctionPhotos] = useState([]);
  const [PickupPhotos, setPickupPhotos] = useState([]);
  const [autosPhotos, setAutosPhotos] = useState([]);
  const [arrivedPhotos, setArrivedPhotos] = useState([]);

  return (
    <div className="mb-7 px-3 ">
      <div className="space-y-6">
        <div className="">
          <p className="pb-1">Auction Photos</p>
          <div className="flex items-center ">
            <input
              onChange={(e) => {
                const reciviedUrls = createUploadFrileUrl(e);
                setAuctionPhotos((prev) => prev.concat(reciviedUrls));
              }}
              type="file"
              accept="image/png , image/jpeg, image/webp, image/jpg, image/JPG"
              id="auctionPhotos"
              className="file-input-box"
            />
            <label htmlFor="auctionPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-6 gap-x-3 ${auctionPhotos.length > 0 && "mt-6"} gap-y-2`}>
            {auctionPhotos.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} className="rounded-md h-40" />
                <RxCrossCircled
                  onClick={() => {
                    setAuctionPhotos(handelRemoveFile(img, auctionPhotos));
                  }}
                  className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
                />
                <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="pb-1">Pickup Photos</p>
          <div className="flex items-center ">
            <input
              onChange={(e) => {
                const reciviedUrls = createUploadFrileUrl(e);
                setPickupPhotos((prev) => prev.concat(reciviedUrls));
              }}
              type="file"
              accept="image/png , image/jpeg, image/webp, image/jpg, image/JPG"
              id="PickupPhotos"
              className="file-input-box"
            />
            <label htmlFor="PickupPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-6 gap-x-3 ${PickupPhotos.length > 0 && "mt-6"} gap-y-2`}>
            {PickupPhotos.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} className="rounded-md h-40" />
                <RxCrossCircled
                  onClick={() => {
                    setPickupPhotos(handelRemoveFile(img, PickupPhotos));
                  }}
                  className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
                />
                <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="pb-1">Auto Photos</p>
          <div className="flex items-center ">
            <input
              onChange={(e) => {
                const reciviedUrls = createUploadFrileUrl(e);
                setAutosPhotos((prev) => prev.concat(reciviedUrls));
              }}
              type="file"
              accept="image/png , image/jpeg, image/webp, image/jpg, image/JPG"
              id="AutoPhotos"
              className="file-input-box"
            />
            <label htmlFor="AutoPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-6 gap-x-3 ${autosPhotos.length > 0 && "mt-6"} gap-y-2`}>
            {autosPhotos.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} className="rounded-md h-40" />
                <RxCrossCircled
                  onClick={() => {
                    setAutosPhotos(handelRemoveFile(img, autosPhotos));
                  }}
                  className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
                />
                <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="pb-1">Arrived Photos</p>
          <div className="flex items-center ">
            <input
              onChange={(e) => {
                const reciviedUrls = createUploadFrileUrl(e);
                setArrivedPhotos((prev) => prev.concat(reciviedUrls));
              }}
              type="file"
              accept="image/png , image/jpeg, image/webp, image/jpg, image/JPG"
              id="ArrivedPhotos"
              className="file-input-box"
            />
            <label htmlFor="ArrivedPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-6 gap-x-3 ${arrivedPhotos.length > 0 && "mt-6"} gap-y-2`}>
            {arrivedPhotos.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} className="rounded-md h-40" />
                <RxCrossCircled
                  onClick={() => {
                    setArrivedPhotos(handelRemoveFile(img, arrivedPhotos));
                  }}
                  className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
                />
                <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
