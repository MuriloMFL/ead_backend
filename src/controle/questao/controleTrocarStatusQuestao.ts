import { ServicoTrocarStatusQuestao } from "../../servico/questao/servicotrocarstatusquestao"
import { Request, Response } from "express"

class ControleTrocarStatusQuestao {
    async handle(req: Request, res: Response){
        const {id_questao} = req.body

        const servicotrocarstatusquestao = new ServicoTrocarStatusQuestao();

        const questao = await servicotrocarstatusquestao.executar({id_questao});

        return res.json(questao)
    }
}

export {ControleTrocarStatusQuestao}