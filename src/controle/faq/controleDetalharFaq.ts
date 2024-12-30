import { ServicoDetalharFaq } from "../../servico/faq/servicoDetalharFaq"; 
import { Response, Request } from "express";

class ControleDetalharFaq {
    async handle(req: Request, res: Response){
        const {id_faq} = req.params

        const servicodetalharfaq = new ServicoDetalharFaq();

        const faq = await servicodetalharfaq.executar(Number(id_faq));

        return res.json(faq)
    }
}

export {ControleDetalharFaq}