import { ServicoListarSistema } from "../../servico/sistema/servicoListarSistema";
import { Request, Response, NextFunction } from "express";

class ControleListarSistema {
    async handle(req:Request, res: Response, next: NextFunction){
        const { nome_sistema, status } = req.query
        
        const Status = status === 'true' ? true : status === 'false' ? false : undefined;

        const filtros = {
            status : Status,
            nome_sistema: nome_sistema ? String(nome_sistema) : undefined,
        }

        const servicolistarsistema = new ServicoListarSistema();

        try{
            const sistema = await servicolistarsistema.executar(filtros);
            return res.json(sistema) ;
        }catch(err){
            next(err);
        }
    }
}

export {ControleListarSistema}