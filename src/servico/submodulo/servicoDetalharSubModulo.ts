import prismaClient from "../../prisma";
import { SubModuloProps } from "./interfaceSubmodulo";

class ServicoDetalharSubModulo {
    async executar(id_submodulo){
        try {
            const submodulo = await prismaClient.subModulo.findFirst({
                where: {
                    id_submodulo: Number(id_submodulo),
                }, select: {
                    id_submodulo:   true,
                    nome_submodulo: true,
                    id_modulo: true,
                    modulo: {
                        select: {
                            nome_modulo: true
                        }
                    },
                    id_sistema: true,
                    sistema: {
                        select: {
                            nome_sistema: true
                        }
                    }
                }
            })
            return submodulo
        }catch (erro){
            throw new Error ('Erro no serviço de detalhar submodulo')
        }

    }

}
export {ServicoDetalharSubModulo}