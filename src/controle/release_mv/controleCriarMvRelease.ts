import { ServicoCriarMvRelease } from "../../servico/release_mv/servicoCriarMvRelease";
import { Response, Request } from "express";

class ControleCriarMvRelease {
    async handle(req: Request, res: Response){
        const {id_release, id_usuario} = req.body

        const servicoCriarMvRelease = new ServicoCriarMvRelease();

        const mvRelease = await servicoCriarMvRelease.executar({id_release, id_usuario});

        return res.json(mvRelease)
    }
}

export {ControleCriarMvRelease}