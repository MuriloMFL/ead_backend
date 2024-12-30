import prismaClient from "../../prisma";

class ServicoCriarFaq {
    async executar({id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order}){
        try {
            const faq = await prismaClient.faq.create({
                data:{
                    id_sistema:   id_sistema, 
                    id_modulo:    id_modulo, 
                    id_submodulo: id_submodulo, 
                    id_aula:      id_aula, 
                    nome_faq:     nome_faq, 
                    link:         link, 
                    observacao:   observacao, 
                    order:        order
                }
            })
            return faq
        } catch (error) {
            throw new Error ('Erro no servico de criar faq')
        }
    }
}

export {ServicoCriarFaq}