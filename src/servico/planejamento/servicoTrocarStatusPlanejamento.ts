import prismaClient from "../../prisma";

class ServicoTrocarStatusPlanejamento {
    async executar({id_planejamento}){
        const verificaStatus = await prismaClient.planejamento.findFirst({
            where :{
                id_planejamento : Number(id_planejamento)
            }
        })

        try {
            if(verificaStatus.status){
                const planejamento = prismaClient.planejamento.update({
                    data: {
                        status : false,
                        data_inativo: new Date()
                    }, where: {
                        id_planejamento : Number(id_planejamento)
                    }
                })
                return planejamento
            }else {
                const planejamento = prismaClient.planejamento.update({
                    data: {
                        status : true,
                    }, where: {
                        id_planejamento : Number(id_planejamento)
                    }
                })
                return planejamento                
            }
        } catch (error) {
            throw new Error('Erro no servico de trocar status do planejamento')
        }
    }
}

export {ServicoTrocarStatusPlanejamento}