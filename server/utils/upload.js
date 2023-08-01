import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/whatsapp-clone",
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: ( req, file ) => {
        
        const match =  ["image/PNG", "image/jpg"];

        if(match.indexOf(file.mimetype) === -1) {

            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
                bucketName: "photos",
                filename: `${Date.now()}-file-${file.originalname}`

        }

    }

});


export default multer({ storage });