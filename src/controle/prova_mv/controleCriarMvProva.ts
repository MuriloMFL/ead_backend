import { ServicoCriarMvProva } from "../../servico/prova_mv/servicoCriarMvProva";
import { Request, Response } from "express";

class ControleCriarMvProva {
    async handle(req: Request, res: Response){
        const {id_sistema,id_submodulo, id_modulo, id_usuario, id_franquia, id_prova, nota} = req.body

        const servicoCriarMvProva = new ServicoCriarMvProva();

        const prova_mv = await servicoCriarMvProva.executar({
            id_sistema,id_submodulo, id_modulo, id_usuario, id_franquia, id_prova, nota
        })

        return res.json(prova_mv)
    }
}

export {ControleCriarMvProva}