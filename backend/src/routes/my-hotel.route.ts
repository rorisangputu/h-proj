import express, { Request, Response } from "express";
import multer from 'multer'

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
        const newHotel = req.body;

        //1.upload image to cloudinary
        const uploadPromise = imageFiles.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64")
        })
        //2. if upload success, add urls to new hotels
        //3. save new hotel into db
        //4. return 201 status
    } catch (error) {
        
    }
})