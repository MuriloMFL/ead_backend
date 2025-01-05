import { ServicoListarQuestaoSemProva } from "../../servico/questao/servicoListarQuestaoSemProva"; 
import { Request, Response } from "express";

class ControleListarQuestaoSemProva {
    async handle(req: Request, res: Response){
        const {id_questao, questoes, status, id_sistema, id_modulo, id_submodulo, id_aula, id_prova} = req.query

        const filtros = {
            id_questao   : id_questao, 
            questoes     : questoes,
            status       : status ==='true' ? true : status ==='false' ? false : true,
            id_sistema   : id_sistema, 
            id_modulo    : id_modulo, 
            id_submodulo : id_submodulo,
            id_prova     : id_prova ? Number(id_modulo) : null,
            id_aula      : id_aula ? Number(id_aula) : null,
        }
        
        const servicolistarquestaoSemProva = new ServicoListarQuestaoSemProva();

        const questao = await servicolistarquestaoSemProva.executar(filtros);

        return res.json(questao)
    }
}

export {ControleListarQuestaoSemProva}