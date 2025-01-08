import { ServicoIncluirQuestaoNaProva } from "../../servico/questao/servicoIncluirQuestaoNaProva";
import { Request, Response } from "express"

class ControleIncluirQuestaoNaProva {
    async handle(req: Request, res: Response){
        const {id_questao, id_prova} = req.body
        
        const servicoIncluirQuestaoNaProva= new ServicoIncluirQuestaoNaProva();

        const questao = await servicoIncluirQuestaoNaProva.executar({id_questao, id_prova});

        return res.json(questao)
    }
}

export {ControleIncluirQuestaoNaProva}