import { MdOutlineCloudUpload } from "react-icons/md";

const Documents = () => {
  return (
    <div className="mb-2 px-3 ">
      <div className="space-y-6">
        <div>
          <p className="pb-1">Auto Document</p>
          <div className="flex items-center ">
            <input type="file" id="AutoDocument" className="file-input-box" />
            <label htmlFor="AutoDocument">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className="pb-1">Auto Invoice</p>
          <div className="flex items-center ">
            <input type="file" id="AutoInvoice" className="file-input-box" />
            <label htmlFor="AutoInvoice">
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

export default Documents;
