import prismaClient from "../../prisma";

class ServicoCriarMvProva {
    async executar({id_sistema,id_submodulo, id_modulo, id_usuario, id_franquia, id_prova}){
        
        const total = await prismaClient.mv_Questao.count({
            where: {
                id_prova : Number(id_prova),
                id_usuario: Number(id_usuario)
            }
        })
        const QuestoesCertas = await prismaClient.mv_Questao.count({
            where: {
                id_prova : Number(id_prova),
                id_usuario: Number(id_usuario),
                certo_errado: 'C'
            }
        })     

        const nota = total > 0 ? parseFloat((QuestoesCertas / total).toFixed(2)) : 0.00;
        
        const notaporcentagem =(nota * 100)
        if(notaporcentagem === 0 ){
            return
        }
        
        const verificaSeExiste = await prismaClient.mv_Prova.findFirst({
           where: {
            id_sistema:   Number(id_sistema),
            id_submodulo: Number(id_submodulo),
            id_modulo:    Number(id_modulo),
            id_usuario:   Number(id_usuario),
            id_franquia:  Number(id_franquia),
            id_prova   :  Number(id_prova)
           } 
        })

        if(!verificaSeExiste){
            try {
                const prova_mv = await prismaClient.mv_Prova.create({
                    data: {
                        id_sistema:   Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo:    Number(id_modulo),
                        id_usuario:   Number(id_usuario),
                        id_franquia:  Number(id_franquia),
                        id_prova   :  Number(id_prova),
                        nota  : notaporcentagem
                    }
                })
                return prova_mv
            } catch (error) {
                throw new Error('Erro no servico de criar mv prova')
            }
        }
    }
}

export {ServicoCriarMvProva}