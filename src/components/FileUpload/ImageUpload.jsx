import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import { fileUploadApi } from "../../features/fileUploadApi/fileIUploadApi";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const ImageUpload = ({ title, type, photos, setPhotos }) => {
  const dispatch = useDispatch();

  const handleFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    dispatch(fileUploadApi.endpoints.exportPhotoUpload.initiate({ data: formData, type }))
      .unwrap()
      .then((res) => setPhotos([...photos, res.data]))
      .catch((er) => console.log(er));
    e.target.value = "";
  };

  const handelRemoveFile = (removeImg) => {
    // eslint-disable-next-line react/prop-types
    const removeFilesArray = photos.filter((item) => item !== removeImg);
    setPhotos(removeFilesArray);
  };

  return (
    <div>
      <p className="pb-1">{title}</p>
      <div className="flex items-center">
        <input
          onChange={handleFile}
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
              onClick={() => handelRemoveFile(img)}
              className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
            />
            {/* <ClipLoader color="#36d7b7" className="absolute top-14 right-20" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
