import prismaClient from "../../prisma";

interface Sistema {
    nome_sistema?: string;
    status?: boolean;
}

class ServicoListarSistema {
    async executar(filtro: Sistema){

        try {
            const buscasistema = await prismaClient.sistema.findMany({
                where:{
                    status: filtro.status,
                    nome_sistema: filtro.nome_sistema ? { contains: filtro.nome_sistema, mode: 'insensitive' } : undefined,
                }, select: { 
                    id_sistema: true,
                    nome_sistema: true,
                    status: true
                }
            });
            return buscasistema.map( (sistema) => ({
                id_sistema  : sistema.id_sistema,
                nome_sistema: sistema.nome_sistema,
                status      : sistema.status
            }))
        }catch{
            throw new Error ('Erro ao buscar sistemas cadastrados')
        }


    }
}

export {ServicoListarSistema}