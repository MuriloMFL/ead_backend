import prismaClient from "../../prisma";

class ServicoAtualizarQuestao {
    async executar({
        id_questao,
        id_sistema,    
        id_submodulo,  
        id_modulo,     
        id_aula,
        id_prova,       
        questao,       
        alternativa_A, 
        alternativa_B, 
        alternativa_C, 
        alternativa_D, 
        correta,       
        observacao,    
        order
    }){
        try {
            const questoes = await prismaClient.questao.update({
                where : {
                    id_questao: Number(id_questao)
                }, data :{
                    id_sistema    : Number(id_sistema) ?? null,    
                    id_submodulo  : Number(id_submodulo),  
                    id_modulo     : Number(id_modulo),     
                    id_aula       : Number(id_aula),
                    id_prova      : Number(id_prova),       
                    questao       : questao,       
                    alternativa_A : alternativa_A, 
                    alternativa_B : alternativa_B, 
                    alternativa_C : alternativa_C, 
                    alternativa_D : alternativa_D, 
                    correta       : correta,       
                    observacao    : observacao,    
                    order         : Number(order)
                }
            })
            return questoes  
        } catch (err) {
            console.error(err)
            throw new Error(err)         
        }

    }
}

export {ServicoAtualizarQuestao}