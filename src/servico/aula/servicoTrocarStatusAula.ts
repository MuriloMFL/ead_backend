import prismaClient from "../../prisma";

class ServicoTrocarStatusAula {
    async executar({id_aula}){
        const verificarStatus = await prismaClient.aula.findFirst({
            where: {
                id_aula: Number(id_aula)
            }
        })

        try {
            if(verificarStatus.status){
               const aula = await prismaClient.aula.update({
                where: {
                    id_aula: Number(id_aula),
                }, data: {
                    status      : false,
                    data_inativo: new Date()
                }
               })
               return aula 
            }else {
                const aula = await prismaClient.aula.update({
                    where: {
                        id_aula: Number(id_aula),
                    }, data: {
                        status      : true,
                    }
                   })
                   return aula 
            }
        } catch (error) {
            
        }
    }
}

export {ServicoTrocarStatusAula}