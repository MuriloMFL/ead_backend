import { ServicoAtualizarFaq } from "../../servico/faq/servicoAtualizarFaq";
import { Request, Response } from "express";

class ControleAtualizarFaq {
    async handle(req: Request, res: Response){
        const {id_faq, id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order} = req.body;
        
        const servicocriarfaq = new ServicoAtualizarFaq();

        const faq = await servicocriarfaq.executar({
            id_faq,
            id_sistema, 
            id_modulo, 
            id_submodulo, 
            id_aula, 
            nome_faq, 
            link, 
            observacao, 
            order 
        })
        return res.json(faq)
    }
}

export {ControleAtualizarFaq}