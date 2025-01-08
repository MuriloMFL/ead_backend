import prismaClient from "../../prisma";

class ServicoContarQtdSubModulos {
    async executar({status}){
        const SubModulos = await prismaClient.subModulo.count({
            where: {
                status: true
            }
        })
        return SubModulos
    }
}

export {ServicoContarQtdSubModulos}