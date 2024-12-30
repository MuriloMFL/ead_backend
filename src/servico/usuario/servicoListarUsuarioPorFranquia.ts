import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarUsuarioPorFranquia {
    async executar(filtros){
        const dados = {
            id_usuario  : filtros.id_usuario,
            nome_usuario: filtros.nome_usuario
                                      ? { contains: filtros.nome_usuario, mode: Prisma.QueryMode.insensitive }
                                      : undefined,
            status      : filtros.status,
            id_franquia : filtros.id_franquia
        }

        const buscaFranquia = await prismaClient.usuario.findMany({
            where: dados,
            include:{
                franquia:{
                    select: {nome: true}
                }
            }
        })

        return buscaFranquia.map( (usuario) => ({
            id_usuario    : usuario.id_usuario,
            nome_usuario  : usuario.nome_usuario,
            id_franquia   : usuario.id_franquia,
            nome_franquia : usuario.franquia?.nome,
            email         : usuario.email,
            login         : usuario.login,
            status        : usuario.status
        }));
    }
}

export {ServicoListarUsuarioPorFranquia}