import prismaClient from "../../prisma";

class ServicoVerificarMvVideo {
    async executar(id_video, id_usuario){
        try {
            const mvvideo = await prismaClient.mv_Video.findFirst({
                where: {
                    id_video: Number(id_video),
                    id_usuario: Number(id_usuario)
                }
            })
            return mvvideo
        } catch (erro) {
            throw new Error('Erro no serviço de detalhar video')
        }
    }
}

export {ServicoVerificarMvVideo}