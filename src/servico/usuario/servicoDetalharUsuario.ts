import prismaClient from "../../prisma";

class ServicoDetalharUsuario {
    async executar(id_usuario: number){
        const usuario = await prismaClient.usuario.findFirst({
            where:{
               id_usuario: id_usuario
            },
            select: {
                id_usuario: true,
                nome_usuario: true,
                login: true,
                email: true,
                id_franquia: true,
                tipo_usuario: true
            }
        })

        return usuario;
    }
}

export {ServicoDetalharUsuario}