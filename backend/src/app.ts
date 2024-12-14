
import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotnev/config';


const app = express();
app.use(express.json());
app.use(urlencoded({
    extended: true
}))

app.get("/", (req: Request, res: Response) => {
    return res.send("BZZZAAA world");
   
});

app.listen(3000, () => {
    console.log("Listening on 3k");
    
});