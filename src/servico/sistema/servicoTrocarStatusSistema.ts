import prisma from "../../prisma";
interface Sistema {
    id_sistema: number;
    status: boolean
}
class ServicoTrocarStatusSistema {
    async executar({id_sistema}: Sistema) {

        try {
            const verificaStatus = await prisma.sistema.findFirst({
                where:{
                    id_sistema: Number(id_sistema),
                    status: true
                }
            })
            if(verificaStatus){
                const sistema = await prisma.sistema.update({
                    data:{
                        status: false,
                        data_inativo: new Date()
                    },
                    where:{
                        id_sistema: Number(id_sistema)
                    } 
                })  
                return sistema
            }else {
                const sistema = await prisma.sistema.update({
                    data:{
                        status: true,
                        data_inativo: new Date()
                    },
                    where:{
                        id_sistema: Number(id_sistema)
                    }
                    
                })  
                return sistema                
            }

        }catch (erro){
            throw new Error ('Erro ao atualizar Status do cadastro')
        }

    }
}

export {ServicoTrocarStatusSistema}