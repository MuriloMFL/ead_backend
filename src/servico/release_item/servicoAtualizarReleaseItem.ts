import prismaClient from "../../prisma";

class ServicoAtualizarReleaseItem {
    async executar({
        id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
    }){
        const releaseItem  = await prismaClient.release_item.update({
            where: {
                id_item_release: Number(id_item_release)
            }, data: {
                nome_release,
                numero_release,
                id_release,
                id_sistema,
                id_modulo,
                id_submodulo,
                correcao,
                alteracao,
                imagem,
                observacao,                
            }
        })
        return releaseItem
    }
}

export {ServicoAtualizarReleaseItem}