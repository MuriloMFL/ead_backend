import { ServicoTrocarStatusPlanejamento } from "../../servico/planejamento/servicoTrocarStatusPlanejamento";
import { Request, Response } from "express";

class ControleTrocarStatusPlanejamento {
    async handle(req: Request, res: Response){
        const {id_planejamento} = req.body

        const servicoTrocarStatusPlanejamento = new ServicoTrocarStatusPlanejamento();

        const planejamento = await servicoTrocarStatusPlanejamento.executar({id_planejamento})

        return res.json(planejamento)
    }
}

export {ControleTrocarStatusPlanejamento}