import prismaClient from "../../prisma";
interface Faq {
    id_faq: number,
    status: boolean
}
class ServicoTrocarStatusFaq {
    async executar ({id_faq}: Faq){
        
        const verificarStatus = await prismaClient.faq.findFirst({
            where:{
                id_faq: Number(id_faq),
                status: true
            }
        })

        try {
            if (verificarStatus){
                const faq = await prismaClient.faq.update({
                    data: {
                        status: false,
                        data_inativo: new Date()
                    },
                    where: {
                        id_faq: Number(id_faq)
                    } 
                })
                return faq
            }else {
                const faq = await prismaClient.faq.update({
                    data: {
                        status: true,
                    },
                    where: {
                        id_faq: Number(id_faq)
                    } 
                })
                return faq
            }
        } catch (erro) {
            throw new Error('Erro no servico de trocar status da faq')
        }
    }
}

export {ServicoTrocarStatusFaq}