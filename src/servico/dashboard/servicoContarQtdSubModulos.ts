import prismaClient from "../../prisma";

class ServicoContarQtdSubModulos {
    async executar({status}){
        const SubModulos = await prismaClient.subModulo.count({
            where: {
                status: true
            }
        })
        if (SubModulos > 0){
            return SubModulos
        }

    }
}

export {ServicoContarQtdSubModulos}