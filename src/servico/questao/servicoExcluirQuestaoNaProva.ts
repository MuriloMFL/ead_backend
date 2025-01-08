import prismaClient from "../../prisma";

class ServicoExcluirQuestaoNaProva {
    async executar({id_questao}){
        try {
            const questao = await prismaClient.questao.update({
                where: {
                    id_questao: Number(id_questao)
                },
                data: {
                    id_prova : null
                }
            })
            return questao

        } catch (error) {
            console.error(error)
            throw new Error('Erro no servico de trocar status questao')
        }
    }
}

export {ServicoExcluirQuestaoNaProva}