import prismaClient from "../../prisma";

class ServicoContarQtdAulas {
    async executar({status}){
        const Aulas = await prismaClient.aula.count({
            where: {
                status: true
            }
        })
        if(Aulas > 0){
            return Aulas
        }
        
    }
}

export {ServicoContarQtdAulas}