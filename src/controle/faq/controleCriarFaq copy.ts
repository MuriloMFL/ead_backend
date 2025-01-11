import { ServicoCriarFaq } from "../../servico/faq/servicoCriarFaq";
import { Response, Request } from "express";

class ControleCriarFaq {
    async handle (req: Request, res: Response) {
        const {id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order} = req.body;

        const servicocriarfaq = new ServicoCriarFaq();

        const faq = await servicocriarfaq.executar({
            id_sistema    : id_sistema, 
            id_modulo     : id_modulo, 
            id_submodulo  : id_submodulo, 
            id_aula       : id_aula, 
            nome_faq      : nome_faq, 
            link          : link, 
            observacao    : observacao, 
            order         : order
        })
        
        return res.json(faq)

    }
}

export {ControleCriarFaq}