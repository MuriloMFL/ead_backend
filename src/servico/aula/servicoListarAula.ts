import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarAula {
    async executar(filtros){

        const dados = {
            nome_aula    : filtros.nome_aula ? { contains: filtros.nome_aula, mode: Prisma.QueryMode.insensitive } : undefined,
            status       : filtros.status
        }

        const buscaaula = await prismaClient.aula.findMany({
            where: dados,
            include: {
                sistema:{
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
        return buscaaula.map( (aula) =>({
            id_aula        : aula.id_aula,
            id_sistema     : aula.id_sistema,
            nome_sistema   : aula.sistema?.nome_sistema,
            id_modulo      : aula.id_modulo,
            nome_modulo    : aula.modulo?.nome_modulo,
            id_submodulo   : aula.id_submodulo,
            nome_submodulo : aula.submodulo?.nome_submodulo,
            nome_aula      : aula.nome_aula,
            status         : aula.status
        }));
    }
}

export {ServicoListarAula}