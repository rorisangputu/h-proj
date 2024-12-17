import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["auth_token"];

    if (!token) {
        return res.status(401).json({ message: "Unauthorised" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
    } catch (error) {
        return res.status(401).json({ message: "Unauthorised" });
    }
}