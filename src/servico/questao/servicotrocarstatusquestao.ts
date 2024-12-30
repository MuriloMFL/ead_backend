import prismaClient from "../../prisma";

class ServicoTrocarStatusQuestao {
    async executar({id_questao}){
        const verificaStatus = await prismaClient.questao.findFirst({
            where: {
                id_questao: id_questao
            }
        })

        try {
            if(verificaStatus.status) {
                const questao = await prismaClient.questao.update({
                    where: {
                        id_questao: id_questao
                    },
                    data: {
                        status: false,
                        data_inativo: new Date()
                    }
                })
                return questao
            }else {
                const questao = await prismaClient.questao.update({
                    where: {
                        id_questao: id_questao
                    },
                    data: {
                        status: true,
                    }
                })
                return questao
            }
        } catch (error) {
            throw new Error('Erro no servico de trocar status questao')
        }
    }
}

export {ServicoTrocarStatusQuestao}