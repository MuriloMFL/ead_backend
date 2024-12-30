import prismaClient from "../../prisma";

class ServicoTrocarStatusProva {
    async executar ({id_prova}){

        const verificarStatus = await prismaClient.prova.findFirst({
            where : {
                id_prova: id_prova
            }
        })

        if (verificarStatus.status) {
            const prova = await prismaClient.prova.update({
                where: {
                    id_prova: id_prova,
                }, data:{
                    status: false,
                    data_inativo: new Date()
                }
            })
            return prova
        }else {
            const prova = await prismaClient.prova.update({
                where: {
                    id_prova: id_prova,
                }, data:{
                    status: true
                }
            })
            return prova
        }
    }
}

export {ServicoTrocarStatusProva}