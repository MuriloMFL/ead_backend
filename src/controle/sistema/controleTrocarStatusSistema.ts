import { ServicoTrocarStatusSistema } from "../../servico/sistema/servicoTrocarStatusSistema";
import { Response, Request } from "express";

class ControleTrocarStatusSistema {
    async handle(req: Request, res: Response){
        const {id_sistema, status} = req.body

        const servicotrocarstatussistema = new ServicoTrocarStatusSistema();
        try{
            const sistema = await servicotrocarstatussistema.executar({id_sistema, status})
            return res.json(sistema)
        }catch (erro){
            throw new Error (erro)
        }
    }
}

export {ControleTrocarStatusSistema}