import express, {Express, Request, Response} from 'express';


const port = 80;

export const app: Express = express();
app.use(express.json())
app.listen(port, ()=>{
    console.log(`Listen to port ${port}`);
})


app.get('/hello', (req: Request, res: Response) => {
    res.status(200).send("Hello World")
})