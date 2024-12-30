import { ServicoListarFranquia } from "../../servico/franquia/servicoListarFranquia";
import { Request, Response, NextFunction } from "express";

class ControleListarFranquia{
    async handle(req: Request, res: Response, next: NextFunction){
        const { status, nome } = req.query;

        const statusFilter = status === 'true' ? true : status === 'false' ? false : undefined;

        const filtros = {
            status: statusFilter ,
            nome: nome ? String(nome) : undefined,
        }
        
        const servicoListarFranquia = new ServicoListarFranquia();

        try{
            const Franquia = await servicoListarFranquia.executar(filtros);
            return res.json(Franquia);
            
        }catch (err){
            next(err);
        } 
    }
}

export {ControleListarFranquia}