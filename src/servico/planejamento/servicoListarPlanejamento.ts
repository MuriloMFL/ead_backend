import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarPlanejamento {
    async executar({filtros}){

        const dados ={
            id_planejamento   : filtros.id_planejamento, 
            nome_planejamento : filtros.nome_planejamento ? { contains: filtros.nome_planejamento, mode: Prisma.QueryMode.insensitive }
                              : undefined,
            status            : filtros.status,
            etapa_finalizado  : filtros.etapa_finalizado
        }

        const buscaplanejamento = await prismaClient.planejamento.findMany({
            where: dados, 
            include:{
                sistema: {
                    select: {nome_sistema: true }
                },
                modulo: {
                    select: {nome_modulo: true}
                },
                submodulo: {
                    select: {nome_submodulo: true}
                },
                usuario: {
                    select: {nome_usuario:true}
                }  
            }
        })
        
        return buscaplanejamento.map((planejamento) => ({
            id_planejamento   : planejamento.id_planejamento, 
            nome_planejamento : planejamento.nome_planejamento,
            id_sistema        : planejamento.id_sistema, 
            nome_sistema      : planejamento.sistema?.nome_sistema || null,
            id_modulo         : planejamento.id_modulo, 
            nome_modulo       : planejamento.modulo?.nome_modulo,
            id_submodulo      : planejamento.id_submodulo, 
            nome_submodulo    : planejamento.submodulo?.nome_submodulo,
            id_usuario        : planejamento.usuario, 
            nome_usuario      : planejamento.usuario?.nome_usuario,
            etapa_finalizado  : planejamento.etapa_finalizado,
            status            : planejamento.status           
        }));
    }
}

export {ServicoListarPlanejamento}