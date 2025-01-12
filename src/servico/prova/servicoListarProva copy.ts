import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarProva {
    async executar(filtros){

        const buscanota = await prismaClient.mv_Prova.findFirst({
            where: {
                id_prova : Number(filtros.id_prova)
            }, select:{
                nota: true
            }
        })

        const dados = {
            id_prova     : filtros.id_prova,
            id_sistema   : filtros.id_sistema,
            id_modulo    : filtros.id_modulo,
            id_submodulo : filtros.id_submodulo,
            nome_prova   : filtros.nome_prova ? {contains: filtros.nome_prova, mode: Prisma.QueryMode.insensitive} : undefined,
            status       : filtros.status
        }

        const buscaprova = await prismaClient.prova.findMany({
            where: dados,
            include: {
                sistema: {
                    select: {nome_sistema: true}
                },
                modulo: {
                    select: {nome_modulo: true}
                },
                submodulo: {
                    select: {nome_submodulo: true}
                }
            }
        })

        return buscaprova.map((prova) => ({
            id_prova      : prova.id_prova,
            id_sistema    : prova.id_sistema,
            nome_sistema  : prova.sistema?.nome_sistema,
            id_modulo     : prova.id_modulo,
            nome_modulo   : prova.modulo?.nome_modulo,
            id_submodulo  : prova.id_submodulo,
            nome_submodulo: prova.submodulo?.nome_submodulo,
            nome_prova    : prova.nome_prova,
            status        : prova.status,        
        }))
    }
}

export {ServicoListarProva}