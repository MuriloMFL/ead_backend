import prismaClient from "../../prisma"

class ServicoTrocarStatusRelease {
    async executar({id_release}){
        const verificaStatus = await prismaClient.release.findFirst({
            where:{
                id_release: Number(id_release)
            }
        })

        if(verificaStatus.status) {
            const release = await prismaClient.release.update({
                where:{
                    id_release: Number(id_release)
                }, data:{
                    status: false,
                    data_inativo: new Date()
                }
            })
            return release
        }else {
            const release = await prismaClient.release.update({
                where:{
                    id_release: Number(id_release)
                }, data:{
                    status: true,
                }
            })
            return release
        }
    }
}

export {ServicoTrocarStatusRelease}