import express, { Router, Response, Request } from 'express';
import Hotel from '../models/hotel.model';

const router = Router();

router.get("/search", async (req: Request, res: Response) => {
    try {
        const pageSize = 5;
        const pageNum = parseInt(req.query.page ? req.query.page.toString() : "1");
        
        //If user asks for page 3 logic is to skip 2 pages and 10 items
        const skip = (pageNum - 1) * pageSize; //Telling db to skip items

        const hotels = await Hotel.find().skip(skip).limit(pageSize); 
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default router;