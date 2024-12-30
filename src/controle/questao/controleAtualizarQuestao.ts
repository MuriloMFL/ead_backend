import { ServicoAtualizarQuestao } from "../../servico/questao/servicoAtualizarQuestao";
import { Request, Response } from "express";

interface Questao {
    id_questao    :number
    id_sistema    :number
    id_submodulo  :number
    id_modulo     :number
    id_aula       :number
    questao       :string
    alternativa_A :string
    alternativa_B :string
    alternativa_C :string
    alternativa_D :string
    correta       :string
    observacao    :string
    order         :number
}

class ControleAtualizarQuestao {
    async handle(req: Request, res: Response){
        const {  
            id_questao,
            id_sistema,    
            id_submodulo,  
            id_modulo,     
            id_aula,       
            questao,       
            alternativa_A, 
            alternativa_B, 
            alternativa_C, 
            alternativa_D, 
            correta,       
            observacao,    
            order }: Questao = req.body;

            const servicoatualizarquestao = new ServicoAtualizarQuestao();

            const questoes = await servicoatualizarquestao.executar({
                id_questao,
                id_sistema,    
                id_submodulo,  
                id_modulo,     
                id_aula,       
                questao,       
                alternativa_A, 
                alternativa_B, 
                alternativa_C, 
                alternativa_D, 
                correta,       
                observacao,    
                order
            });
        
            return res.json(questoes)
    }

}

export {ControleAtualizarQuestao}