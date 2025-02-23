import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes'; 
import path from "path";

const app = express();
app.use(express.json()); 

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(router); 

app.use('/media', express.static(path.join(__dirname, 'src/media')));

app.use((err: Error, req:Request, res: Response, next:NextFunction)=> {
    if(err instanceof Error){
        //Se for erro
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Erro interno'
    })
})

app.listen(process.env.PORT, () => console.log('Servidor online!!!'));