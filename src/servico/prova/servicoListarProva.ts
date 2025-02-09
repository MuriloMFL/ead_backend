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

      if (filtros.finalizado) {
        const buscaMvProva = await prismaClient.mv_Prova.findMany ({
          where: {
            id_prova: filtros.id_prova,
            id_usuario: filtros.id_usuario,
          },include: {
            sistema: {
              select: { nome_sistema: true },
            },
            modulo: {
              select: { nome_modulo: true },
            },
            submodulo: {
              select: { nome_submodulo: true },
            },
            prova: {
              select: {nome_prova: true}
            }
          },
        });
  
        return buscaMvProva.map((prova) => ({
          id_prova: prova.id_prova,
          id_sistema: prova.id_sistema,
          nome_sistema: prova.sistema?.nome_sistema,
          id_modulo: prova.id_modulo,
          nome_modulo: prova.modulo?.nome_modulo,
          id_submodulo: prova.id_submodulo,
          nome_submodulo: prova.submodulo?.nome_submodulo,
          nome_prova : prova.prova?.nome_prova,
          status: prova.status,
          nota : prova.nota
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
export {ServicoListarProva}