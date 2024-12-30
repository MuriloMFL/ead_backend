import prismaClient from "../../prisma";

class ServicoDetalharAula {
    async executar(id_aula){
        const aula = await prismaClient.aula.findFirst({
            where: {
                id_aula: Number(id_aula)
            }
        })
        return aula
    }
}

export {ServicoDetalharAula}