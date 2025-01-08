import { ServicoExcluirQuestaoNaProva } from "../../servico/questao/servicoExcluirQuestaoNaProva";
import { Request, Response } from "express"

class ControleExcluirQuestaoNaProva {
    async handle(req: Request, res: Response){
        const {id_questao} = req.body
        console.log(id_questao)
        const servicoExcluirQuestaoNaProva= new ServicoExcluirQuestaoNaProva();

        const questao = await servicoExcluirQuestaoNaProva.executar({id_questao});

        return res.json(questao)
    }
}

export {ControleExcluirQuestaoNaProva}