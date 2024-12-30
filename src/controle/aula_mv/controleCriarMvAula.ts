import { ServicoCriarMvAula } from "../../servico/aula_mv/servicoCriarMvAula";
import { Response, Request } from "express";

class ControleCriarMvAula {
    async handle(req: Request, res: Response){
        const {id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia} = req.body

        const servicoCriarMvAula = new ServicoCriarMvAula();

        const aula_mv = await servicoCriarMvAula.executar({id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia})

        return res.json(aula_mv)
    }
}

export {ControleCriarMvAula}