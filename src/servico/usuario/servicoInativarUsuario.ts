import prismaClient from "../../prisma";

class ServicoInativarUsuario{
    async executar(id_usuario){

        const verificaStatus = await prismaClient.usuario.findFirst({
            where:{
                id_usuario: Number(id_usuario),
                status: false
            }
        })
        
        if (!verificaStatus) {
            const InativarUsuario = await prismaClient.usuario.update({
                data:{
                    status: false,
                    data_inativo: new Date()
                },
                where:{
                    id_usuario: Number(id_usuario)
                }
            })
    
            return InativarUsuario;
        }else {
            const InativarUsuario = await prismaClient.usuario.update({
                data:{
                    status: true
                },
                where:{
                    id_usuario: Number(id_usuario)
                }
            })
    
            return InativarUsuario;
        }

    }
}

export {ServicoInativarUsuario}