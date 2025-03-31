import { ServicoListarFranquia } from "../../servico/franquia/servicoListarFranquia";
import { Request, Response, NextFunction } from "express";

class ControleListarFranquia{
    async handle(req: Request, res: Response, next: NextFunction){
        const { status, nome, id_franquia } = req.query;

        const filtros = {
            status: status === 'true' ? true : status === 'false' ? false : undefined,
            nome: nome ? String(nome) : undefined,
            id_franquia : id_franquia === '1' ? undefined : Number(id_franquia)
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