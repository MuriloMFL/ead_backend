import prismaClient from "../../prisma";

interface ListarFranquiaParams{
    status?:      boolean;
    nome?:        string;
    id_franquia?: number;
}
class ServicoListarFranquia {
    async executar(filtros: ListarFranquiaParams) {
        const franquia = await prismaClient.franquia.findMany({
            where: {
                status: filtros.status,
                nome: filtros.nome ? { contains: filtros.nome, mode: 'insensitive' } : undefined,
                //id_franquia: filtros.id_franquia
            },
            select: {
                id_franquia: true,
                nome: true,
                responsavel: true,
                telefone: true,
                status: true
            }
        });
        return franquia;
    }
}

export {ServicoListarFranquia}