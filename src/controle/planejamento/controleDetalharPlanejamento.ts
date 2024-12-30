import { ServicoDetalharPlanejamento } from "../../servico/planejamento/servicoDetalharPlanejamento";
import { Response, Request } from "express";

class ControleDetalharPlanejamento {
    async handle(req: Request, res: Response){
        const {id_planejamento} = req.params

        const servicoDetalharPlanejamento = new ServicoDetalharPlanejamento()

        const planejamento = await servicoDetalharPlanejamento.executar({id_planejamento})

        return res.json(planejamento)
    }
}

export {ControleDetalharPlanejamento}