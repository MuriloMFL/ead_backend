import { ServicoCriarMvQuestao } from "../../servico/questao_mv/servicoCriarMvQuestao";
import { Request, Response } from "express";

class ControleCriarMvQuestao {
    async handle(req:Request, res: Response){
        const {  
            id_sistema, id_submodulo, id_modulo, id_aula, id_prova, id_usuario, id_franquia, id_questao, certo_errado
        } = req.body
        
        const servicoCriarMvQuestao = new ServicoCriarMvQuestao();

        const questao_mv = await servicoCriarMvQuestao.executar({
            id_sistema, id_submodulo, id_modulo, id_aula, id_prova, id_usuario, id_franquia, id_questao, certo_errado
        })

        return res.json(questao_mv)
    }
}

export {ControleCriarMvQuestao}