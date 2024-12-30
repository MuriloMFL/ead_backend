import prismaClient from "../../prisma";

class ServicoAtualizarSubModulo {
    async executar(dados){
        try {
            const submodulo = await prismaClient.subModulo.update({
                where: {
                    id_submodulo:   Number(dados.id_submodulo)
                }, data: {
                    nome_submodulo: dados.nome_submodulo,
                    id_modulo:      Number(dados.id_modulo),
                    id_sistema:     Number(dados.id_sistema)
                }
            })
            return submodulo
        }catch{
            throw new Error ('Erro no serviço do submodulo')
        }
    }
}

export {ServicoAtualizarSubModulo}