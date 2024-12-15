import express, { Request, Response } from 'express';
import User from '../models/user.model';

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    try {
        let user = await User.findOne({
            email: req.body.email,
        })
    } catch (error) {
        
    }
})