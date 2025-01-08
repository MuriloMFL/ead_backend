import { ServicoListarQuestao } from "../../servico/questao/servicoListarQuestao";
import { Request, Response } from "express";

class ControleListarQuestao {
    async handle(req: Request, res: Response){
        const {id_questao, questoes, status, id_sistema, id_modulo, id_submodulo, id_aula, id_prova} = req.query

        const filtros = {
            id_questao   : id_questao, 
            questoes     : questoes,
            status       : status ==='true' ? true : status ==='false' ? false : undefined,
            id_sistema   : id_sistema, 
            id_modulo    : id_modulo, 
            id_submodulo : id_submodulo,
            id_aula      : id_aula? Number(id_aula) : undefined,
            id_prova     : id_prova ? Number(id_prova) : undefined
        }
        
        const servicolistarquestao = new ServicoListarQuestao();

        const questao = await servicolistarquestao.executar(filtros);

        return res.json(questao)
    }
}

export {ControleListarQuestao}