import { ServicoListarAula } from "../../servico/aula/servicoListarAula";
import { Request, Response } from "express";

class ControleListarAula {
    async handle(req: Request, res: Response){
        const {id_sistema, id_modulo, id_submodulo, nome_aula, status} = req.query;

        const filtros = {
            id_sistema  : Number(id_sistema), 
            id_modulo   : Number(id_modulo), 
            id_submodulo: Number(id_submodulo), 
            nome_aula   : nome_aula, 
            status      : status === 'true' ? true : status ==='false' ? false : undefined
        }

        const servicolistaraula = new ServicoListarAula();

        const aula = await servicolistaraula.executar(filtros)

        return res.json(aula)
    }
}

export {ControleListarAula}