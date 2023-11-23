export const createUploadFrileUrl = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {

        return URL.createObjectURL(file);
    });
    console.log(imagesArray)
    e.target.value = "";
    return imagesArray;
};

export const handelRemoveFile = (e, fileUrls) => {
    const result = fileUrls.filter((item) => item !== e);
    URL.revokeObjectURL(e);
    return result
};