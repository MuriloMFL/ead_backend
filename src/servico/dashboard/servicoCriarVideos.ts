import prismaClient from "../../prisma";

class ServicoContarVideos {
    async executar (){

        try {
            const contarVideo = await prismaClient.video.count()
            return contarVideo;
        } catch (error) {
            throw new Error('Erro no serviço de contar videos do dashborad')
        }

    }

}

export {ServicoContarVideos}