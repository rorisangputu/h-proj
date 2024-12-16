import express, { Request, Response } from 'express';
import { check } from 'express-validator';

const router = express.Router();

router.post("/login", [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more character is required").isLength({
        min: 6
    })
], async (req: Request, res: Response) => {
    
})

export default router;