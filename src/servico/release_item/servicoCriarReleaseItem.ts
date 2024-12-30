import prismaClient from "../../prisma";

class ServicoCriarReleaseItem {
    async executar({nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao}){
        
        try {
            const releaseItem = await prismaClient.release_item.create({
                data: {
                    nome_release     : nome_release,
                    numero_release   : Number(numero_release),
                    id_release       : Number(id_release),
                    id_sistema       : Number(id_sistema),
                    id_modulo        : Number(id_modulo),
                    id_submodulo     : Number(id_submodulo),
                    correcao         : correcao,
                    alteracao        : alteracao,
                    imagem           : imagem,
                    observacao       : observacao,
                }
            })
            return releaseItem      
        } catch (error) {
            throw new Error('Erro no serviço de Criar ReleaseItem')
        }

    }
}

export {ServicoCriarReleaseItem}