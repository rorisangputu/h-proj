
import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';


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
    console.log("Listening on port:", PORT);
    
});