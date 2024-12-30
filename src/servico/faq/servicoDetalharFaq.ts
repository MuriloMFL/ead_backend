import prismaClient from "../../prisma";

class ServicoDetalharFaq {
    async executar(id_faq: number){
        try {
            const faq = await prismaClient.faq.findFirst({
                where: {
                    id_faq: id_faq
                }
            })
            return faq            
        } catch (error) {
            throw new Error('Erro no servico de detalhar faq')
        }

    }
}

export {ServicoDetalharFaq}