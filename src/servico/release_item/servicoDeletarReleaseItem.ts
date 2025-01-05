import prismaClient from "../../prisma";

class ServicoDeletarReleaseItem{
    async executar({id_item_release}){
        
        try {
            const ItemRelease = await prismaClient.release_item.delete({
                where: {
                    id_item_release: Number(id_item_release)
                }
            })
            return ItemRelease
        } catch (error) {
            console.error
        }
    }
}

export {ServicoDeletarReleaseItem}