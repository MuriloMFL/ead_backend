import prisma from "../../prisma";


class ServicoDetalharSistema {
    async executar(id_sistema) {
        const verificaSeExiste = await prisma.sistema.findFirst({
            where:{id_sistema: id_sistema}
        })

        if(!verificaSeExiste) {
            throw new Error ('Sistema não encontrado.')
        }

        try{
            const sistema = await prisma.sistema.findFirst({
                where:{
                    id_sistema: id_sistema
                },
                select: {
                    id_sistema: true,
                    nome_sistema: true,
                    status: true
                }
            })
            return sistema;
        }catch{
            throw new Error ('Erro ao detalhar sistema')
        }

    }
}

export {ServicoDetalharSistema}