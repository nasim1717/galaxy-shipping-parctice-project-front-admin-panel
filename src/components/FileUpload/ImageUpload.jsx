import { useState } from "react";
import { createUploadFrileUrl, handelRemoveFile } from "../../helper/helper";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const ImageUpload = ({ title }) => {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <p className="pb-1">{title}</p>
      <div className="flex items-center ">
        <input
          onChange={(e) => {
            const reciviedUrls = createUploadFrileUrl(e);
            setPhotos((prev) => prev.concat(reciviedUrls));
          }}
          type="file"
          accept="image/png , image/jpeg, image/webp, image/jpg, image/JPG"
          id={title}
          className="file-input-box"
        />
        <label htmlFor={title}>
          <div className="file-upload-btn">
            <MdOutlineCloudUpload />
            <span>UPLOAD</span>
          </div>
        </label>
      </div>
      <div className={`grid grid-cols-6 gap-x-3 ${photos.length > 0 && "mt-6"} gap-y-2`}>
        {photos.map((img, index) => (
          <div key={index} className="relative">
            <img src={img} className="rounded-md h-40" />
            <RxCrossCircled
              onClick={() => {
                setPhotos(handelRemoveFile(img, photos));
              }}
              className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
            />
            <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
