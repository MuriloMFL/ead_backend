import prismaClient from "../../prisma";

class ServicoContarQtdModulos {
    async executar({status}){
        const Modulos = await prismaClient.modulo.count({
            where: {
                status: true
            }
        })
        return Modulos
    }
}

export {ServicoContarQtdModulos}