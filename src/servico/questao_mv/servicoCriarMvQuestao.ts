import prismaClient from "../../prisma";

class ServicoCriarMvQuestao {
    async executar({
        id_sistema, id_submodulo, id_modulo, id_aula, id_prova, id_usuario, id_franquia, id_questao, alternativa_marcada
    }){
        const verificaAlternativa = await prismaClient.questao.findFirst({
            where:{
                id_questao: Number(id_questao),
                correta : String(alternativa_marcada)
            }
        })

        const verificaSeExiste = await prismaClient.mv_Questao.findFirst({
            where: {
                id_sistema: Number(id_sistema),
                id_submodulo: Number(id_submodulo),
                id_modulo: Number(id_modulo),
                id_aula: Number(id_aula),
                id_prova: Number(id_prova),
                id_usuario: Number(id_usuario),
                id_franquia: Number(id_franquia),
                id_questao   : Number(id_questao)
            }
        })

        if(!verificaSeExiste){
            try {
                const certo_errado = verificaAlternativa ? "C" : "E";
                const questao_mv = prismaClient.mv_Questao.create({
                    data: {
                        id_sistema: Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        id_aula: Number(id_aula),
                        id_prova: Number(id_prova),
                        id_usuario: Number(id_usuario),
                        id_franquia: Number(id_franquia),
                        id_questao   : Number(id_questao),
                        certo_errado  : certo_errado  
                    }                   
                })
                return questao_mv
            } catch (error) {
                throw new Error('Erro no servico de criar mv questao')
            }
        }
    }
}

export {ServicoCriarMvQuestao}