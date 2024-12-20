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
    } catch (error) {
        
    }
})