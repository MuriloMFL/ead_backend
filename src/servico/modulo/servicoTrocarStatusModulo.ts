import prisma from "../../prisma";
class ServicoTrocarStatusModulo {
    async executar(id_modulo){
        
        try {
            const verificaStatus = await prisma.modulo.findFirst({
                where:{
                    id_modulo: id_modulo,
                    status: true
                }
            })
            if(verificaStatus){
                const modulo = await prisma.modulo.update({
                    data:{
                        status: false,
                        data_inativo: new Date()
                    },
                    where:{
                        id_modulo: Number(id_modulo)
                    }
                    
                })  
                return modulo
            }else {
                const modulo = await prisma.modulo.update({
                    data:{
                        status: true,
                        data_inativo: new Date()
                    },
                    where:{
                        id_modulo: Number(id_modulo)
                    }
                    
                })  
                return modulo                
            }

        }catch (erro){
            throw new Error ('Erro ao atualizar Status do cadastro')
        }

    }
}

export {ServicoTrocarStatusModulo}