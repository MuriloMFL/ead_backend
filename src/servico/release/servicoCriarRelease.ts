import prismaClient from "../../prisma";

class ServicoCriarRelease {
    async executar({
        numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario, finalizado
    }){
        try {
            const release = await prismaClient.release.create({
                data: {
                    numero_release : Number(numero_release), 
                    versao_gestores, 
                    versao_sincdata, 
                    versao_gestorpdv, 
                    versao_balcao,
                    id_usuario : Number(id_usuario),
                    finalizado : Boolean(finalizado)
                }
            })
            return release
        } catch (error) {
            console.error(error)
        }

    }
}

export {ServicoCriarRelease}