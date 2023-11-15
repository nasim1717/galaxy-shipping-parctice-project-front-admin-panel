import { MdOutlineCloudUpload } from "react-icons/md";

const Photos = () => {
  return (
    <div className="mb-7 px-3 ">
      <div className="space-y-6">
        <div className="">
          <p className="pb-1">Auction Photos</p>
          <div className="flex items-center ">
            <input type="file" id="auctionPhotos" className="file-input-box" />
            <label htmlFor="auctionPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className="pb-1">Pickup Photos</p>
          <div className="flex items-center ">
            <input type="file" id="PickupPhotos" className="file-input-box" />
            <label htmlFor="PickupPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className="pb-1">Auto Photos</p>
          <div className="flex items-center ">
            <input type="file" id="AutoPhotos" className="file-input-box" />
            <label htmlFor="AutoPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className="pb-1">Arrived Photos</p>
          <div className="flex items-center ">
            <input type="file" id="ArrivedPhotos" className="file-input-box" />
            <label htmlFor="ArrivedPhotos">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
