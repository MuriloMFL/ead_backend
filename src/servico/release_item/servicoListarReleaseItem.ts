import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ServicoListarReleaseItem {
    async executar(filtros) {
        try {
            
            const where = {
                id_item_release: filtros.id_item_release ? Number(filtros.id_item_release) : undefined,
                nome_release: filtros.nome_release ? { contains: filtros.nome_release, mode: Prisma.QueryMode.insensitive } : undefined,
                numero_release: filtros.numero_release ? Number(filtros.numero_release) : undefined,
                id_release: filtros.id_release ? Number(filtros.id_release) : undefined,
                id_sistema: filtros.id_sistema ? Number(filtros.id_sistema) : undefined,
                id_modulo: filtros.id_modulo ? Number(filtros.id_modulo) : undefined,
                id_submodulo: filtros.id_submodulo ? Number(filtros.id_submodulo) : undefined,
                correcao: filtros.correcao !== undefined ? Boolean(filtros.correcao) : undefined,
                alteracao: filtros.alteracao !== undefined ? Boolean(filtros.alteracao) : undefined,
            };
    
            const BuscaReleaseItem = await prismaClient.release_item.findMany({
                where,
                include: {
                    sistema: { select: { nome_sistema: true } },
                    modulo: { select: { nome_modulo: true } },
                    submodulo: { select: { nome_submodulo: true } },
                },
            });
    
            return BuscaReleaseItem.map((ReleaseItem) => ({
                id_item_release: ReleaseItem.id_item_release,
                nome_release: ReleaseItem.nome_release,
                numero_release: ReleaseItem.numero_release,
                id_release: ReleaseItem.id_release,
                id_sistema: ReleaseItem.id_sistema,
                nome_sistema: ReleaseItem?.sistema?.nome_sistema,
                id_modulo: ReleaseItem.id_modulo,
                nome_modulo: ReleaseItem?.modulo?.nome_modulo,
                id_submodulo: ReleaseItem.id_submodulo,
                nome_submodulo: ReleaseItem?.submodulo?.nome_submodulo,
                correcao: ReleaseItem.correcao,
                alteracao: ReleaseItem.alteracao,
            }));
        } catch (error) {
            console.error('Erro no serviço de ListarItem:', error);
            throw new Error('Erro no serviço de ListarItem');
        }

    }
}

export {ServicoListarReleaseItem}