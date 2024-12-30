import prismaClient from "../../prisma";

class ServicoAtualizarProva {
    async executar({id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente}){
        const prova = await prismaClient.prova.update({
            where: {
                id_prova: Number(id_prova)
            }, data:{
                id_sistema    : Number(id_sistema), 
                id_modulo     : Number(id_modulo), 
                id_submodulo  : Number(id_submodulo), 
                nome_prova    : nome_prova,
                cliente       : Boolean(cliente)
            }
        })
        return prova
    }
}

export {ServicoAtualizarProva}