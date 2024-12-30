import { ServicoTrocarStatusProva } from "../../servico/prova/servicoTrocarStatusProva";
import { Response, Request } from "express";

class ControleTrocarStatusProvas {
    async handle (req: Request, res: Response){
        const {id_prova} = req.body;

        const servicotrocarstatusprova = new ServicoTrocarStatusProva();

        const prova = await servicotrocarstatusprova.executar({id_prova})

        return res.json(prova)
    }
}

export {ControleTrocarStatusProvas}