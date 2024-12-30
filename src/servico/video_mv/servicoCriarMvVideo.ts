import prismaClient from "../../prisma";

class ServicoCriarMVVideo {
    async executar({id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_video}){
        const verificaSeExiste = await prismaClient.mv_Video.findFirst({
            where: {
                id_sistema: Number(id_sistema),
                id_submodulo: Number(id_submodulo),
                id_modulo: Number(id_modulo),
                id_aula: Number(id_aula),
                id_usuario: Number(id_usuario),
                id_franquia: Number(id_franquia),
                id_video    : Number(id_video)
            }
        })

        if (!verificaSeExiste){
            try {
                const mv_Video = await prismaClient.mv_Video.create ({
                    data: {
                        id_sistema: Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        id_aula: Number(id_aula),
                        id_usuario: Number(id_usuario),
                        id_franquia: Number(id_franquia),
                        id_video    : Number(id_video)                       
                    }
                })
                return mv_Video
            } catch (error) {
                throw new Error('Erro no servico de criar mv video')
            }
        }
    }
}

export {ServicoCriarMVVideo}