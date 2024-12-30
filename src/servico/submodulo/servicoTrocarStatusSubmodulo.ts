import prismaClient from "../../prisma";
import { SubModuloProps } from "./interfaceSubmodulo";

class ServicoTrocarStatusSubModulo {
    async executar({id_submodulo}: SubModuloProps){
        try {

            const verificarStatus = await prismaClient.subModulo.findFirst({
                where:{id_submodulo: id_submodulo},
                select:{status: true}
            })

            if (verificarStatus.status) {
                const submodulo = await prismaClient.subModulo.update({
                    data: {
                        status: false,
                        data_inativo: new Date()
                    },
                    where: {
                        id_submodulo: id_submodulo
                    }
                })
                return submodulo
            }else{
                const submodulo = await prismaClient.subModulo.update({
                    data: {
                        status: true
                    },
                    where: {
                        id_submodulo: id_submodulo
                    }
                })
                return submodulo                
            }
        }catch (erro){
            throw new Error ("Erro no serviço de trocar status")
        }
}
}
export {ServicoTrocarStatusSubModulo}