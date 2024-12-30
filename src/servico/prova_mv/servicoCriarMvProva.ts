import prismaClient from "../../prisma";

class ServicoCriarMvProva {
    async executar({id_sistema,id_submodulo, id_modulo, id_usuario, id_franquia, id_prova, nota}){
        const verificaSeExiste = await prismaClient.mv_Prova.findFirst({
           where: {
            id_sistema: Number(id_sistema),
            id_submodulo: Number(id_submodulo),
            id_modulo: Number(id_modulo),
            id_usuario: Number(id_usuario),
            id_franquia: Number(id_franquia),
            id_prova   : Number(id_prova),
            nota  : nota
           } 
        })

        if(!verificaSeExiste){
            try {
                const prova_mv = await prismaClient.mv_Prova.create({
                    data: {
                        id_sistema: Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        id_usuario: Number(id_usuario),
                        id_franquia: Number(id_franquia),
                        id_prova   : Number(id_prova),
                        nota  : Number(nota)
                    }
                })
                return prova_mv
            } catch (error) {
                throw new Error('Erro no servico de criar mv prova')
            }
        }
    }
}

export {ServicoCriarMvProva}