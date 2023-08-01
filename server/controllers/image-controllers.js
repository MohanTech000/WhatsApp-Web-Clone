import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:5000";

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
        gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs"
    });
        gfs = grid(conn.db, mongoose.mongo);
        gfs.collection("fs");
});

export const uploadFile = async(req, res) => {
    

    if(!req.file) {
        return await res.status(404).json("File not found");
    }

    const imageURL = `${url}/file/${req.file.filename}`;
    return res.status(200).json(imageURL);


}


export const getImage = async(req, res) => {


    try {

        const file = await gfs.files.findOne({ filename: req.params.filename }); 
        const readStream = gridFsBucket.openDownloadStream( file._id );
        readStream.pipe(res);
        
    } catch (error) {
        res.status(500).json(error.message)
    }

}



