import { ServicoContarQtdAulas } from "../../servico/dashboard/servicoContarQtdAulas";
import { Response, Request } from "express";

class ControleContarQtdAulas {
    async handle(req: Request, res: Response){

        const {status} = req.query

        const contarAulas = new ServicoContarQtdAulas();

        const Aulas = await contarAulas.executar({status});

        return res.json(Aulas)
    }
}

export {ControleContarQtdAulas}