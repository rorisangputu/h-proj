import express, { Request, Response } from "express";
import multer from 'multer'
import cloudinary from "cloudinary";
import { HotelType } from "../models/hotel.model";

const router = express.Router();

const storage = multer.memoryStorage(); //want to store images in memory
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 //5mb,

    }
})

// api/my-hotel
router.post('/', upload.array("imageFiles", 6), async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;

        //1.upload image to cloudinary
        const uploadPromises = imageFiles.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64"); //converting image to base64 string
            let dataURI = "data:" + image.mimetype + ";base64," + b64; //creating a string that describes image
            const res = await cloudinary.v2.uploader.upload(dataURI); //usinf cloudinary sdk to upload image to cloudinary
            return res.url;
        });

        const imageUrls = await Promise.all(uploadPromises);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        //2. if upload success, add urls to new hotels

        //3. save new hotel into db
        //4. return 201 status
    } catch (error) {
        console.log("Error creating hotel", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})