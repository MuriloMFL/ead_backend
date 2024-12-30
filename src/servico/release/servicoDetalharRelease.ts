import prismaClient from "../../prisma";

class ServicoDetalharRelease {
    async executar({id_release}){
        const release = await prismaClient.release.findFirst({
            where:{
                id_release: Number(id_release)
            }
        })
        return release
    }
}

export {ServicoDetalharRelease}