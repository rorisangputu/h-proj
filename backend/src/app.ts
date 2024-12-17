import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/users.route';
import authRoutes from './routes/auth.route';

//Database Connection
const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string)
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

// app.get("/test", (req, res) => {
//     res.send({message: "helloooo"})
// })

//Creating api routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes)


//App listener
app.listen(PORT, () => {
    dbConn();
    console.log("Listening on port:", PORT);
});