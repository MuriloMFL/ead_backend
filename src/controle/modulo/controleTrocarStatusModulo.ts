import { ServicoTrocarStatusModulo } from "../../servico/modulo/servicoTrocarStatusModulo";
import { Response, Request } from "express";

class ControleTrocarStatusModulo {
    async handle (req: Request, res: Response){
        const {id_modulo} = req.body

        const servicotrocarstatusmodulo = new ServicoTrocarStatusModulo()

        const modulo = await servicotrocarstatusmodulo.executar(id_modulo)

        return res.json(modulo)

    }
}

export {ControleTrocarStatusModulo}