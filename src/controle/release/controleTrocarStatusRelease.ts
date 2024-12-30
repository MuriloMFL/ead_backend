import { ServicoTrocarStatusRelease } from "../../servico/release/servicoTrocarStatusRelease";
import { Response, Request } from "express";

class ControleTrocarStatusRelease {
    async handle(req: Request, res: Response){
        const {id_release} = req.body;

        const servicoTrocarStatusRelease = new ServicoTrocarStatusRelease();

        const release = await servicoTrocarStatusRelease.executar({id_release})

        return res.json(release)
    }
}

export {ControleTrocarStatusRelease}