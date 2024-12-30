import { ServicoDetalharAula } from "../../servico/aula/servicoDetalharAula";
import { Response, Request } from "express";

class ControleDetalharAula {
    async handle(req:Request, res: Response){
        const {id_aula} = req.params

        const servicodetalharaula = new ServicoDetalharAula();

        const aula = await servicodetalharaula.executar(Number(id_aula))

        return res.json(aula)
    }
}

export {ControleDetalharAula}