import prismaClient from "../../prisma";

class ServicoDetalharCadUsuario {
    async executar({id_usuario}){
        const usuario = await prismaClient.usuario.findFirst({
            where:{
               id_usuario: Number(id_usuario)
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

export {ServicoDetalharCadUsuario}