import prismaClient from "../../prisma";

class ServicoIncluirQuestaoNaProva {
    async executar({id_questao, id_prova}){
        try {
            const questao = await prismaClient.questao.update({
                where: {
                    id_questao: Number(id_questao)
                },
                data: {
                    id_prova : id_prova ? Number(id_prova) : null
                }
            })
            return questao

        } catch (error) {
            console.error(error)
            throw new Error('Erro no servico de trocar status questao')
        }
    }
}

export {ServicoIncluirQuestaoNaProva}