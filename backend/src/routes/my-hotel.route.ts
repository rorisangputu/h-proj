import express, { Request, Response } from "express";
import multer from 'multer'

const router = express.Router();

const storage = multer.memoryStorage();

//api/my-hotel
router.post('/', async (req: Request, res: Response) => {
    
})