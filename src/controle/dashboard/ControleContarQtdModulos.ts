import { ServicoContarQtdModulos } from "../../servico/dashboard/ServicoContarQtdModulos";
import { Response, Request } from "express";

class ControleContarQtdModulo {
    async handle(req: Request, res: Response){

        const {status} = req.query

        const contarModulo = new ServicoContarQtdModulos();

        const Modulos = await contarModulo.executar({status});

        return res.json(Modulos)
    }
}

export {ControleContarQtdModulo}