import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name:process.env.Cloud_name,
    api_key:process.env.Cloud_API_Key,
    api_secret:process.env.Cloud_Secretkey
})
const storage=new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'resumes',
        format:async()=>"pdf",
    },
});

const upload=multer({storage});
export {upload,cloudinary};


