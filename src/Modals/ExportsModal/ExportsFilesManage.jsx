import { useEffect, useState } from "react";
import ImageUpload from "../../components/FileUpload/ImageUpload";
import { useDispatch } from "react-redux";
import { fileUrls } from "../../features/exports/exportsSlice";

const ExportsFilesManage = () => {
  const [invoiceImg, setInvoiceImg] = useState([]);
  const [cotainerImg, setContainerImg] = useState([]);
  const [emptyContainerImg, setEmptyContainer] = useState([]);
  const [loadingImg, setLoadingImg] = useState([]);
  const [loadedImg, setLoadedImg] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fileUrls({
        container_images: cotainerImg,
        empty_container_photos: emptyContainerImg,
        export_invoice_photo: invoiceImg,
        loaded_photos: loadedImg,
        loading_photos: loadingImg,
      })
    );
  }, [invoiceImg, cotainerImg, emptyContainerImg, loadingImg, loadedImg, dispatch]);

  // console.log({ invoiceImg, cotainerImg, emptyContainerImg, loadedImg, loadingImg });

  return (
    <div className="mb-7 px-3">
      <div className="space-y-6">
        <ImageUpload
          title="Export Invoice"
          type="1"
          photos={invoiceImg}
          setPhotos={setInvoiceImg}
        ></ImageUpload>
        <ImageUpload
          title="Container Images"
          type="1"
          photos={cotainerImg}
          setPhotos={setContainerImg}
        ></ImageUpload>
        <ImageUpload
          title="Empty Container Images"
          type="2"
          photos={emptyContainerImg}
          setPhotos={setEmptyContainer}
        ></ImageUpload>
        <ImageUpload
          photos={loadingImg}
          setPhotos={setLoadingImg}
          title="Loading Photos"
          type="3"
        ></ImageUpload>
        <ImageUpload
          photos={loadedImg}
          setPhotos={setLoadedImg}
          title="Loaded Photos"
          type="4"
        ></ImageUpload>
      </div>
    </div>
  );
};

export default ExportsFilesManage;
