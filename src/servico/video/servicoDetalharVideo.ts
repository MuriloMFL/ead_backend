import prismaClient from "../../prisma";

class ServicoDetalharVideo {
    async executar(id_video){
        try {
            const video = await prismaClient.video.findFirst({
                where: {
                    id_video: Number(id_video)
                }
            })
            return video
        } catch (erro) {
            throw new Error('Erro no serviço de detalhar video')
        }
    }
}

export {ServicoDetalharVideo}