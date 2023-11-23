import ImageUpload from "../../components/FileUpload/ImageUpload";

const ExportsFilesManage = () => {
  return (
    <div className="mb-7 px-3">
      <div className="space-y-6">
        <ImageUpload title="Export Invoice"></ImageUpload>
        <ImageUpload title="Container Images"></ImageUpload>
        <ImageUpload title="Empty Container Images"></ImageUpload>
        <ImageUpload title="Loading Photos"></ImageUpload>
        <ImageUpload title="Loaded Photos"></ImageUpload>
      </div>
    </div>
  );
};

export default ExportsFilesManage;
