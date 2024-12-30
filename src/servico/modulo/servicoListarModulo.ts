import prisma from "../../prisma";
import { Prisma } from "@prisma/client"; // Importando a enum Prisma.QueryMode

class ServicoListarModulo {
    async executar(filtros: { nome_modulo?: string; status?: boolean; id_sistema?: number; id_modulo?: number }) {
        const filtro = {
            nome_modulo: filtros.nome_modulo
                ? { contains: filtros.nome_modulo, mode: Prisma.QueryMode.insensitive }
                : undefined,
            status: filtros.status,
            id_sistema: filtros.id_sistema,
            id_modulo: filtros.id_modulo,
        };

        const Buscamodulos = await prisma.modulo.findMany({
            where: filtro,
            include: {
                sistema: {
                    select: {
                        nome_sistema: true,
                    },
                },
            },
        });

        return Buscamodulos.map((modulo) => ({
            id_modulo:    modulo.id_modulo,
            nome_modulo:  modulo.nome_modulo,
            nome_sistema: modulo.sistema?.nome_sistema || null,
            status :      modulo.status,
        }));
    }
}

export { ServicoListarModulo };
