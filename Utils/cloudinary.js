const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinay_api_secret // replace with real secret
  });

  // Upload an image
  async function cloudinaryFileUpload(file){
     console.log(file,"file")
    const uploadResult = await cloudinary.uploader
    .upload(file)
    .catch((error) => {
      console.error(error);
    });
    return uploadResult.url;

  console.log(uploadResult);
  }
  module.exports={cloudinaryFileUpload}