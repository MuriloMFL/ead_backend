import prismaClient from "../../prisma"; 

class ServicoDetalharFranquia {
    async executar(id_franquia: number){
        const franquia = await prismaClient.franquia.findFirst({
            where:{
                id_franquia: id_franquia
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

export {ServicoDetalharFranquia}