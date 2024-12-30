import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarReleaseItem {
    async executar({filtros}){
        try {
            const ReleaseItem = await prismaClient.release_item.findMany({
                where: {
                    id_item_release  : filtros.id_item_release,
                    nome_release     : filtros.nome_release ? {contains: filtros.nome_release, mode: Prisma.QueryMode.insensitive} : undefined,
                    numero_release   : filtros.numero_release,
                    id_release       : filtros.id_release,
                    id_sistema       : filtros.id_sistema,
                    id_modulo        : filtros.id_modulo,
                    id_submodulo     : filtros.id_submodulo,
                    correcao         : filtros.correcao,
                    alteracao        : filtros.alteracao
                }
            })
            return ReleaseItem     
        } catch (error) {
            throw new Error('Erro no serviço de ListarItem')
        }

    }
}

export {ServicoListarReleaseItem}