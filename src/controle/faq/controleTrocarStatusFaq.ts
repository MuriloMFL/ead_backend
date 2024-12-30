import { ServicoTrocarStatusFaq } from "../../servico/faq/servicoTrocarStatusFaq";
import { Response, Request } from "express";

class ControleTrocarStatusFaq {
    async handle (req: Request, res: Response){
        const {id_faq, status} = req.body
 
        const servicotrocarstatusfaq = new ServicoTrocarStatusFaq();

        const faq = await servicotrocarstatusfaq.executar({id_faq, status})

        return res.json(faq)
    }
}

export {ControleTrocarStatusFaq}