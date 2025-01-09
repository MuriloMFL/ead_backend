import prismaClient from "../../prisma";

class ServicoContarQtdModulos {
    async executar({status}){
        const Modulos = await prismaClient.modulo.count({
            where: {
                status: true
            }
        })
        if (Modulos > 0) {
            return Modulos 
        }
    }
}

export {ServicoContarQtdModulos}