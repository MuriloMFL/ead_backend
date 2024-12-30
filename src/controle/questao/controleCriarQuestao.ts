import { ServicoCriarQuestoes } from "../../servico/questao/servicoCriarQuestao";
import { Request, Response } from "express";

interface questao {
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

class ControleCriarQuestoes {
    async handle(req: Request, res: Response){
        const {  id_sistema,    
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
            order } = req.body

        const servicocriarquestao = new ServicoCriarQuestoes();

        const questoes = await servicocriarquestao.executar({
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

export {ControleCriarQuestoes}