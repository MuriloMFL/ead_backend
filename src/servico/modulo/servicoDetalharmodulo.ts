import prismaClient from "../../prisma";

class ServicoDetalharModulo{
    async executar (id_modulo : number){
        
        try {
            const modulo = await prismaClient.modulo.findFirst({
                where:{
                    id_modulo: id_modulo
                }, select : {
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
        } catch (erro){
            throw new Error("Modulo não encontrado")
        }
    }
}

export {ServicoDetalharModulo}