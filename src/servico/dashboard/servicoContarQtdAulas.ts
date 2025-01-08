import prismaClient from "../../prisma";

class ServicoContarQtdAulas {
    async executar({status}){
        const Aulas = await prismaClient.aula.count({
            where: {
                status: true
            }
        })
        return Aulas
    }
}

export {ServicoContarQtdAulas}