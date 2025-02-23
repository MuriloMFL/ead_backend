import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarProva {
    async executar(filtros){

      const dados = {
          id_prova     : filtros.id_prova,
          id_sistema   : filtros.id_sistema,
          id_modulo    : filtros.id_modulo,
          id_submodulo : filtros.id_submodulo,
          nome_prova   : filtros.nome_prova ? {contains: filtros.nome_prova, mode: Prisma.QueryMode.insensitive} : undefined,
          status       : filtros.status,
      }

      if(filtros.id_usuario) {
        if (filtros.finalizado) {
          const whereClause: any = { ...dados };
  
          if (filtros.id_usuario) {
            whereClause.mv_prova = {
              some: {
                AND: [
                  { id_usuario: filtros.id_usuario },
                  filtros.id_prova ? { id_prova: filtros.id_prova } : {},
                ],
              },
            };
          }
          
          const buscaprova = await prismaClient.prova.findMany({
            where: whereClause,
            include: {
              sistema: {
                select: { nome_sistema: true },
              },
              modulo: {
                select: { nome_modulo: true },
              },
              submodulo: {
                select: { nome_submodulo: true },
              },
              mv_prova: {
                where: {id_usuario: filtros.id_usuario},
                select: {nota: true}
              }
            },
          });
                 
          return buscaprova.map((prova) => ({
            id_prova: prova.id_prova,
            id_sistema: prova.id_sistema,
            nome_sistema: prova.sistema?.nome_sistema,
            id_modulo: prova.id_modulo,
            nome_modulo: prova.modulo?.nome_modulo,
            id_submodulo: prova.id_submodulo,
            nome_submodulo: prova.submodulo?.nome_submodulo,
            nome_prova: prova.nome_prova,
            status: prova.status,
            nota: prova.mv_prova[0]?.nota ?? null,
          }));  
        }  
  
        //Pega as provas pendentes
        if (!filtros.finalizado) {
          const whereClause: any = { ...dados };
  
          if (filtros.id_usuario) {
            whereClause.mv_prova = {
              none: {
                AND: [
                  { id_usuario: filtros.id_usuario },
                  filtros.id_prova ? { id_prova: filtros.id_prova } : {},
                ],
              },
            };
          }
          
          const buscaprova = await prismaClient.prova.findMany({
            where: whereClause,
            include: {
              sistema: {
                select: { nome_sistema: true },
              },
              modulo: {
                select: { nome_modulo: true },
              },
              submodulo: {
                select: { nome_submodulo: true },
              },
            },
          });
                 
          return buscaprova.map((prova) => ({
            id_prova: prova.id_prova,
            id_sistema: prova.id_sistema,
            nome_sistema: prova.sistema?.nome_sistema,
            id_modulo: prova.id_modulo,
            nome_modulo: prova.modulo?.nome_modulo,
            id_submodulo: prova.id_submodulo,
            nome_submodulo: prova.submodulo?.nome_submodulo,
            nome_prova: prova.nome_prova,
            status: prova.status,
          }));  
        }      
      }
    }
}
export {ServicoListarProva}