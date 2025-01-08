import { ServicoListarQuestaoSemProva } from "../../servico/questao/servicoListarQuestaoSemProva"; 
import { Request, Response } from "express";

class ControleListarQuestaoSemProva {
    async handle(req: Request, res: Response){
        
        const {status} = req.body

        const servicolistarquestaoSemProva = new ServicoListarQuestaoSemProva();

        const questao = await servicolistarquestaoSemProva.executar();

        return res.json(questao)
    }
}

export {ControleListarQuestaoSemProva}