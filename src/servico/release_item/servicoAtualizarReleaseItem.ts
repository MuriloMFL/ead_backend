import prismaClient from "../../prisma";

class ServicoAtualizarReleaseItem {
    async executar({
        id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
    }){
        try {
            const releaseItem  = await prismaClient.release_item.update({
                where: {
                    id_item_release: Number(id_item_release)
                }, data: {
                    nome_release ,
                    numero_release,
                    id_release,
                    id_sistema   : Number(id_sistema),
                    id_modulo    : Number(id_modulo),
                    id_submodulo : Number(id_submodulo),
                    correcao     : Boolean(correcao),
                    alteracao    : Boolean(alteracao),
                    imagem,
                    observacao,                
                }
            })
            return releaseItem  
        } catch (error) {
            console.error(error)
        }

    }
}

export {ServicoAtualizarReleaseItem}