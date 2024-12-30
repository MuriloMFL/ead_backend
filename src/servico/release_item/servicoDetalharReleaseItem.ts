import prismaClient from "../../prisma";

class ServicoDetalharReleaseItem {
    async executar({id_item_release}){
        try {
            const releaseItem = await prismaClient.release_item.findFirst({
                where : {
                    id_item_release : Number(id_item_release)
                }
            })
            return releaseItem     
        } catch (error) {
            throw new Error('Erro no serviço de detalhar ReleaseItem')
        }
    }
}

export {ServicoDetalharReleaseItem}