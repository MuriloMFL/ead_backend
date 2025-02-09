import prismaClient from "../../prisma";

class ServicoVerificarMvVideo {
    async executar(id_video){
        try {
            const mvvideo = await prismaClient.mv_Video.findFirst({
                where: {
                    id_video: Number(id_video)
                }
            })
            return mvvideo
        } catch (erro) {
            throw new Error('Erro no serviço de detalhar video')
        }
    }
}

export {ServicoVerificarMvVideo}