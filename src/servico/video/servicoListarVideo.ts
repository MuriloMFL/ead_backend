import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarVideo {
    async executar(filtros: {id_sistema, id_modulo, id_submodulo, nome_video, status}){

        const dados = {
            nome_video:   filtros.nome_video
                          ? { contains: filtros.nome_video, mode: Prisma.QueryMode.insensitive }
                          : undefined,
            status:       filtros.status,
            id_sistema:   filtros.id_sistema,
            id_modulo:    filtros.id_modulo,
            id_submodulo: filtros.id_submodulo 
        }

        try {
            const buscavideo = await prismaClient.video.findMany({
                where: dados,
                include: {
                    sistema: {
                        select: {
                            nome_sistema: true
                        }
                    },
                    modulo :{
                        select: {
                            nome_modulo: true
                        }
                    },
                    submodulo:{
                        select: {
                            nome_submodulo: true
                        }
                    }

                }
            })
            return buscavideo.map( (video) => ({
                id_video       : video.id_video,
                id_sistema     : video.id_sistema,
                nome_sistema   : video.sistema?.nome_sistema,
                id_modulo      : video.id_modulo,
                nome_modulo    : video.modulo?.nome_modulo,
                id_submodulo   : video.id_submodulo,
                nome_submodulo : video.submodulo?.nome_submodulo,
                nome_video     : video.nome_video,
                status         : video.status
            }))
        } catch (error) {
            throw new Error('Erro no serviço de listar video')
        }
    }
}

export {ServicoListarVideo}