import { ServicoAtualizarQuestao } from "../../servico/questao/servicoAtualizarQuestao";
import { Request, Response } from "express";

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
            order } = req.body;

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