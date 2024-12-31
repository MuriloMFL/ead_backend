import prismaClient from "../../prisma";

class ServicoCriarVideo {
    async executar ({id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order}){
        try {
            const video = await prismaClient.video.create({
                data:{
                    id_sistema:   Number(id_sistema), 
                    id_modulo:    Number(id_modulo), 
                    id_submodulo: Number(id_submodulo), 
                    id_aula:      Number(id_aula), 
                    nome_video:   nome_video, 
                    link:         link, 
                    observacao:   observacao, 
                    order:        Number(order)
                }
            })
            return video            
        } catch (error) {
            throw new Error('Erro no serviço de criar Video')
        }

    }
}

export {ServicoCriarVideo}