import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string)
        console.log('Db Connected');
    } catch (error) {
        console.error('Db Connection Error:', error);
        process.exit(1); // Exit the process if DB connection fails
    }
};


const app = express();
app.use(express.json());
app.use(urlencoded({
    extended: true
}));
app.use(cors());
const PORT = process.env.PORT || 3000;



app.get("/api/test", async (req: Request, res: Response) => {
    return res.send({message: "Olllaaa world"});
});

app.listen(PORT, () => {
    dbConn();
    console.log("Listening on port:", PORT);
});