import prismaClient from "../../prisma";

class ServicoAtualizarFaq {
    async executar({id_faq, id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order}){
        
        try {
            const faq = await prismaClient.faq.update({
                where: {
                    id_faq: Number(id_faq)
                },
                data:{
                    id_sistema:   Number(id_sistema), 
                    id_modulo:    Number(id_modulo), 
                    id_submodulo: Number(id_submodulo), 
                    id_aula:      Number(id_aula), 
                    nome_faq:     nome_faq, 
                    link:         link, 
                    observacao:   observacao, 
                    order:        Number(order)
                }
            })
            return faq
        } catch (error) {
            throw new Error ('Erro no servico de atualizar faq')
        }
    }
}

export {ServicoAtualizarFaq}