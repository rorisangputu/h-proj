import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.route';

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
app.use(express.json());
app.use(urlencoded({
    extended: true
}));
app.use(cors());
const PORT = process.env.PORT || 3000;

//Creating api routes
app.use("/api/users", userRoutes);



//App listener
app.listen(PORT, () => {
    dbConn();
    console.log("Listening on port:", PORT);
});