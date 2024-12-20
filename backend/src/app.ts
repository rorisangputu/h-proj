import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/users.route';
import authRoutes from './routes/auth.route';
import myHotelRoutes from './routes/my-hotel.route';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

const cloudinaryConn = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        console.log("Cloudinary Connected.")
    } catch (error) {
         console.error('Db Connection Error:', error);
        process.exit(1); // Exit the process if cloudinary connection fails
    }
}

//Database Connection
const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string);
        console.log('Db Connected');
    } catch (error) {
        console.error('Db Connection Error:', error);
        process.exit(1); // Exit the process if DB connection fails
    }
};

//Initialising app
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended: true
}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
// app.get("/test", (req, res) => {
//     res.send({message: "helloooo"})
// })

//Creating api routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/my-hotels", myHotelRoutes);


//App listener
app.listen(PORT, () => {
    dbConn();
    cloudinaryConn();
    console.log("Listening on port:", PORT);
});