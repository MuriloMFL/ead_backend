import prismaClient from "../../prisma";

interface SolicitacaoTrocarStatusFranquia {
    id_franquia: Number;
}

class ServicoTrocarStatusFranquia{
    async executar({id_franquia}: SolicitacaoTrocarStatusFranquia){

        const verificaStatus = await prismaClient.franquia.findFirst({
            where:{
                id_franquia: Number(id_franquia),
                status: false
            }
        })

        if (!verificaStatus) {
            const TrocarStatusFranquia = await prismaClient.franquia.update({
                data:{
                    status: false,
                    data_inativo: new Date()
                },
                where:{
                    id_franquia: Number(id_franquia)
                }
                
            })  
            return TrocarStatusFranquia;        
        }else {
            const TrocarStatusFranquia = await prismaClient.franquia.update({
                data:{
                    status: true,
                    data_inativo: new Date()
                },
                where:{
                    id_franquia: Number(id_franquia)
                }
                
            })  
            return TrocarStatusFranquia;           
        }       
    }
}

export {ServicoTrocarStatusFranquia}