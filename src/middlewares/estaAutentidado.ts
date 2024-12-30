import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}

export function estaAutentidado(
    req: Request,
    res: Response,
    next: NextFunction
){
    const  tokenAutenticado = req.headers.authorization ;
    
    if (!tokenAutenticado){
        return res.status(401).end();
    }

    const [, token] = tokenAutenticado.split(" ")

    try{
        const {sub} = verify(
            token, 
            process.env.JWT_SECRET
        )as Payload;

        req.id_usuario = sub;
        

        return next();
        
    }catch(err){
        return res.status(401).end();
    }

    
}