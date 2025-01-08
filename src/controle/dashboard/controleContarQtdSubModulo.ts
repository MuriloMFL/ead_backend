import { ServicoContarQtdSubModulos } from "../../servico/dashboard/servicoContarQtdSubModulos";
import { Response, Request } from "express";

class ControleContarQtdSubModulo {
    async handle(req: Request, res: Response){

        const {status} = req.query

        const contarSubModulo = new ServicoContarQtdSubModulos();

        const SubModulos = await contarSubModulo.executar({status});

        return res.json(SubModulos)
    }
}

export {ControleContarQtdSubModulo}