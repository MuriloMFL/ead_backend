import prismaClient from "../../prisma";

class ServicoListarQuestaoSemProva  {
    async executar (){
       try {
        const questaoSemProva = await prismaClient.questao.findMany({
            where:{
                id_aula : null,
                id_prova: null
            }
        })
        
        return questaoSemProva.map ((Questoes) => ({
            id_questao : Questoes.id_questao,
            questoes   : Questoes.questao
        }))

       } catch (error) {
        console.error(error)
        throw new Error('Erro ao Buscar dados')
       } 
    }
}

export {ServicoListarQuestaoSemProva }