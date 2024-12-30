import { ServicoCriarMvFaq } from "../../servico/faq_mv/servicoCriarMvFaq";
import { Response, Request } from "express";

class ControleCriarMvFaq {
    async handle(req: Request, res:Response){
        const {id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_faq} = req.body

        const servicoCriarMvFaq = new ServicoCriarMvFaq();

        const faq_mv = await servicoCriarMvFaq.executar({
            id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_faq
        })

        return res.json(faq_mv)
    }
}

export {ControleCriarMvFaq}