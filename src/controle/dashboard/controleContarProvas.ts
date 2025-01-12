import { Response, Request } from "express";
import { ServicoContarProvas } from "../../servico/dashboard/servicoContarProvas";

class ControleContarProvas {
    async handle(req: Request, res: Response){

        const {id_usuario} = req.query

        const contarAulas = new ServicoContarProvas();

        const Nota = await contarAulas.executar({id_usuario});

        return res.json(Nota)
    }
}

export {ControleContarProvas}