import prismaClient from "../../prisma";

class ServicoCriarRelease {
    async executar({
        numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario
    }){
        const release = await prismaClient.release.create({
            data: {
                numero_release : Number(numero_release), 
                versao_gestores, 
                versao_sincdata, 
                versao_gestorpdv, 
                versao_balcao,
                id_usuario
            }
        })
        return release
    }
}

export {ServicoCriarRelease}