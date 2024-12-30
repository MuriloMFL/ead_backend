import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";
import { SubModuloProps } from "./interfaceSubmodulo";

class ServicoListaSubModulo {
    async executar( filtros: SubModuloProps){
        
        const filtro = {
            nome_submodulo:  filtros.nome_submodulo
                          ? { contains: filtros.nome_submodulo, mode: Prisma.QueryMode.insensitive }
                          : undefined,
            status:       filtros.status,
            id_sistema:   filtros.id_sistema,
            id_modulo:    filtros.id_modulo,
            id_submodulo: filtros.id_submodulo
        };
            console.log(filtros.id_modulo)
        try {
            const Buscasubmodulo = await prismaClient.subModulo.findMany({
                where: filtro,
                include: {
                    sistema:{
                        select: {nome_sistema: true},
                    },
                    modulo: {
                        select: {nome_modulo: true}
                    }
                }
            })

            return Buscasubmodulo.map((subModulo) => ({
            id_submodulo:    subModulo.id_submodulo,
            nome_submodulo:  subModulo.nome_submodulo,
            id_modulo:       subModulo.id_modulo,
            nome_modulo:     subModulo.modulo?.nome_modulo,
            id_sistema :     subModulo.id_sistema,
            nome_sistema:    subModulo.sistema?.nome_sistema || null,
            status :         subModulo.status,
        }));
        }catch (erro){
            throw new Error('Erro no serviço de Listar SubModulo')
        }
    }
}

export {ServicoListaSubModulo}