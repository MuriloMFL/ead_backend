import prismaClient from "../../prisma";

class ServicoAtualizarRelease {
    async executar({
        id_release, numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao
    }){
        const release = await prismaClient.release.update({
            where: {
                id_release: Number(id_release)
            }, data: {
                numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao
            }
        })

        return release
    }
}

export {ServicoAtualizarRelease}