import prismaClient from "../../prisma";

class ServicoAtualizarFranquia {
    async executar(id_franquia: number, nome, responsavel, telefone: string){
        const franquia = await prismaClient.franquia.update({
            where: {
                id_franquia: id_franquia
            }, data:{
                nome: nome,
                responsavel: responsavel,
                telefone: telefone,
            },
            select:{
                id_franquia: true,
                nome: true,
                responsavel: true,
                telefone: true,
                status: true,               
            }
        })
        return franquia;
    }
}

export {ServicoAtualizarFranquia}