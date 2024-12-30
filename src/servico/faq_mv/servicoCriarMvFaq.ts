import prismaClient from "../../prisma";

class ServicoCriarMvFaq {
    async executar({id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_faq}){

        const verificaSeExiste = await prismaClient.mv_Faq.findFirst({
            where : {
                id_sistema: Number(id_sistema),
                id_submodulo: Number(id_submodulo),
                id_modulo: Number(id_modulo),
                id_aula: Number(id_aula),
                id_usuario: Number(id_usuario),
                id_franquia: Number(id_franquia),
                id_faq    : Number(id_faq)                
            }
        })

        if(!verificaSeExiste){
            try {
                const faq_mv = await prismaClient.mv_Faq.create({
                    data: {     
                        id_sistema: Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        id_aula: Number(id_aula),
                        id_usuario: Number(id_usuario),
                        id_franquia: Number(id_franquia),
                        id_faq    : Number(id_faq)
                    }
                })
                return faq_mv
            } catch (error) {
                throw new Error('Erro no serviço faq mv')
            }
        }
    }
}

export {ServicoCriarMvFaq}