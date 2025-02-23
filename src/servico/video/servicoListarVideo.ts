import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarVideo {
    async executar(filtros: {id_video, id_sistema, id_modulo, id_submodulo, nome_video, status, id_usuario, finalizado}){

        const dados = {
            id_video:     filtros.id_video, 
            nome_video:   filtros.nome_video
                          ? { contains: filtros.nome_video, mode: Prisma.QueryMode.insensitive }
                          : undefined,
            status:       filtros.status,
            id_sistema:   filtros.id_sistema ? Number(filtros.id_sistema) : undefined, 
            id_modulo:    filtros.id_modulo,
            id_submodulo: filtros.id_submodulo 
        }

        try {
            if(filtros.id_usuario) {
                if (filtros.finalizado === undefined) {
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

                }

                if (!filtros.finalizado) {
                    const whereClause: any = { ...dados };

                    if (filtros.id_usuario) {
                    whereClause.mv_video = {
                        none: {
                        AND: [
                            { id_usuario: filtros.id_usuario },
                        ],
                        },
                    };
                    }

                    const buscavideo = await prismaClient.video.findMany({
                        where: whereClause,
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

                }

                if (filtros.finalizado) {
                    const whereClause: any = { ...dados };

                    if (filtros.id_usuario) {
                    whereClause.mv_video = {
                        some: {
                        AND: [
                            { id_usuario: filtros.id_usuario },
                        ],
                        },
                    };
                    }

                    const buscavideo = await prismaClient.video.findMany({
                        where: whereClause,
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

                }
        }

        } catch (error) {
            throw new Error('Erro no serviço de listar video')
        }
    
    }
}

export {ServicoListarVideo}