import { ServicoListarFaqs } from "../../servico/faq/servicoListarFaq";
import { Response, Request } from "express";

class ControleListarFaq {
    async handle (req: Request, res: Response) {
        const {id_sistema, id_modulo, id_submodulo, nome_faq, status} = req.query

        const filtros = {        
            id_sistema: id_sistema,
            id_submodulo: id_submodulo,
            id_modulo: id_modulo,
            nome_faq: nome_faq,
            status: status === 'true' ? true : status === 'false' ? false : undefined
        }
        
        const servicolistarfaq = new ServicoListarFaqs();
        const faq = await servicolistarfaq.executar(filtros)

        return res.json(faq)
    }
}

export {ControleListarFaq}