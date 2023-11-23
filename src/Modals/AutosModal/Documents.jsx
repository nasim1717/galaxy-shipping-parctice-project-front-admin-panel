import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { createUploadFrileUrl, handelRemoveFile } from "../../helper/helper";
import { ClipLoader } from "react-spinners";
import { RxCrossCircled } from "react-icons/rx";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Documents = () => {
  const [autoDocument, setAutoDocument] = useState([]);

  return (
    <div className="mb-2 px-3 ">
      <div className="space-y-6">
        <div>
          <p className="pb-1">Auto Document</p>
          <div className="flex items-center ">
            <input
              onChange={(e) => {
                const reciviedUrls = createUploadFrileUrl(e);
                setAutoDocument((prev) => prev.concat(reciviedUrls));
              }}
              type="file"
              accept="application/pdf"
              id="AutoDocument"
              className="file-input-box"
            />
            <label htmlFor="AutoDocument">
              <div className="file-upload-btn">
                <MdOutlineCloudUpload />
                <span>UPLOAD</span>
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-6 gap-x-3 ${autoDocument.length > 0 && "mt-6"} gap-y-2`}>
            {autoDocument.map((pdfUrl, index) => (
              <div key={index} className="relative h-40 ">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl={pdfUrl} />;
                </Worker>
                <RxCrossCircled
                  onClick={() => {
                    setAutoDocument(handelRemoveFile(pdfUrl, autoDocument));
                  }}
                  className="text-red-500 font-extrabold text-2xl absolute -top-4 -right-1 cursor-pointer"
                />
                <ClipLoader color="#36d7b7" className="absolute top-14 right-20" />
              </div>
            ))}
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
