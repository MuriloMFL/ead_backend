import prismaClient from "../../prisma";

class ServicoTrocarStatusVideo {
    async executar(id_video){
        
        const verificaStatus = await prismaClient.video.findFirst({
            where: {
                id_video: id_video,
            }, select :{
                status: true
            }
        })
        
        try {
            if (verificaStatus.status){
                const video = await prismaClient.video.update({
                    where: {
                        id_video: id_video
                    }, data :{
                        status: false,
                        data_inativo: new Date()
                    }
                })
                return video
            } else {
                const video = await prismaClient.video.update({
                    where: {
                        id_video: id_video
                    }, data :{
                        status: true
                    }
                })
                return video
            }
        } catch (error) {
            throw new Error('Erro no servico de trocar status video')
        }
    }
}

export {ServicoTrocarStatusVideo}