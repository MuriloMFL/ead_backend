import prismaClient from "../../prisma";

class ServicoListarRelease {
    async executar({filtros}){

        const dados = {
            id_release:     filtros.release,
            numero_release: filtros.numero_release,
            status:         filtros.status,
            finalizado:     filtros.finalizado
        }

        const buscarelease = await prismaClient.release.findMany({
            where :dados,
            orderBy:{
                numero_release: 'desc'
            },
            include:{
                usuario:{
                    select: {nome_usuario: true}
                }
            }
        })
        return buscarelease.map((release) => ({
            id_release :      release.id_release,
            numero_release:   release.numero_release,
            data_inclusao :   release.data_inclusao
                              ? new Date(release.data_inclusao).toLocaleDateString('pt-BR') 
                              : null,
            id_usuario :      release.id_usuario,
            versao_gestores : release.versao_gestores,
            versao_sincdata : release.versao_sincdata,
            versao_gestorpdv: release.versao_gestorpdv,
            versao_balcao :   release.versao_balcao,
            nome_usuario :    release.usuario?.nome_usuario,
            status       :    release.status,
            finalizado :      release.finalizado
        }))
    }
}

export {ServicoListarRelease}