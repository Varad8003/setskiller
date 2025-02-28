import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../utils/cloudinaryConfig";

const storage=new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'resumes',
        allowed_formats:['pdf','doc','docx'],
    },
});

const upload=multer({storage});

export default upload;
