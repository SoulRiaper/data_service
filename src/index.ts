import express, { Request, Response} from "express";

const app = express();
const port = 8080;


app.get('/', (req: Request, res: Response) => {
    console.log(`[${new Date().toISOString()}]` ,'user get main');
    res.status(200).send('hello world');
});

app.listen(port, () => {
    console.log('server running at port: ', port);
}).on('error', (err) => {
    throw new Error(err.message);
});