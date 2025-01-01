import prismaClient from "../../prisma";

class ServicoDetalharQuestao {
    async executar(id_questao){
        const questao = await prismaClient.questao.findFirst({
            where : {
                id_questao: Number(id_questao)
            },
        })
        return questao
    }
}

export {ServicoDetalharQuestao}