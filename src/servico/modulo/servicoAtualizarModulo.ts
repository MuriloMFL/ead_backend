import prismaClient from "../../prisma";

interface Modulo {
    id_modulo: number,
    nome_modulo: string,
    id_sistema: number
}

class ServicoAtualizarModulo {
    async executar({id_modulo, nome_modulo, id_sistema}: Modulo){
        try {
            const modulo = await prismaClient.modulo.update({
                where: {
                    id_modulo: Number(id_modulo)
                },data:{
                    nome_modulo: nome_modulo,
                    id_sistema: Number(id_sistema)
                }, select: {
                    id_modulo: true,
                    nome_modulo: true,
                    id_sistema: true,
                    sistema: {
                        select: {
                            nome_sistema: true
                        }
                    }
                }
            })
            return modulo
        }catch (erro){
            throw new Error('Erro ao atualizar Modulo');
        }
    }
}

export {ServicoAtualizarModulo}