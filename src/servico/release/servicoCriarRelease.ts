import prismaClient from "../../prisma";

class ServicoCriarRelease {
    async executar({
        numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario, finalizado
    }){
        const release = await prismaClient.release.create({
            data: {
                numero_release : Number(numero_release), 
                versao_gestores, 
                versao_sincdata, 
                versao_gestorpdv, 
                versao_balcao,
                id_usuario,
                finalizado
            }
        })
        return release
    }
}

export {ServicoCriarRelease}