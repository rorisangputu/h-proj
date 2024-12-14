
import express, { Request, Response } from 'express'; 
import cors from 'cors';
import 'dotnev/config';


const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.send("BZZZAAA world");
   
});

app.listen(3000, () => {
    console.log("Listening on 3k");
    
});