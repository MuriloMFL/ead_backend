import prismaClient from "../../prisma";

class ServicoDetalharProva {
    async executar({id_prova}){
        const prova = await prismaClient.prova.findFirst({
            where: {
                id_prova: Number(id_prova)
            }, select: {
                id_prova: true,
                id_sistema: true,
                sistema: {
                    select: {
                        nome_sistema: true
                    }
                },
                id_modulo: true,
                modulo: {
                    select: {
                        nome_modulo: true
                    }
                },
                id_submodulo: true,
                submodulo: {
                    select: {
                        nome_submodulo: true
                    }
                },
                nome_prova: true,
                cliente: true,
                status: true
            }
        })
        return prova
    }
}

export {ServicoDetalharProva}