import prismaClient from "../../prisma";

class ServicoCriarQuestoes {
    async executar({
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
    }){
        const questoes = await prismaClient.questao.create({
            data: {
                id_sistema     : Number(id_sistema),    
                id_submodulo   : Number(id_submodulo),  
                id_modulo      : Number(id_modulo),     
                id_aula        : Number(id_aula),      
                questao,       
                alternativa_A, 
                alternativa_B, 
                alternativa_C, 
                alternativa_D, 
                correta,       
                observacao,    
                order           : Number(order)
            }
        })

        return questoes;
    }
}

export {ServicoCriarQuestoes}