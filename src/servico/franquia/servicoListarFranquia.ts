import prismaClient from "../../prisma";

interface ListarFranquiaParams{
    status?:      boolean;
    nome?:        string;
}
class ServicoListarFranquia {
    async executar(filtros: ListarFranquiaParams) {
        const franquia = await prismaClient.franquia.findMany({
            where: {
                status: filtros.status,
                nome: filtros.nome ? { contains: filtros.nome, mode: 'insensitive' } : undefined,
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