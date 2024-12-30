import prismaClient from "../../prisma";

interface SubModulo {
    nome_submodulo: string,
    id_sistema: number,
    id_modulo: number
}

class ServicoCriarSubModulo {
    async executar({nome_submodulo, id_sistema, id_modulo}: SubModulo) {
        try {
            const submodulo = await prismaClient.subModulo.create({
                data:{
                    nome_submodulo: nome_submodulo,
                    id_modulo: Number(id_modulo),
                    id_sistema: Number(id_sistema)
                }
            })
            return submodulo
        }catch (err){
            throw new Error('Erro no serviço de criar o Submodulo')
        }

    }
}

export {ServicoCriarSubModulo}