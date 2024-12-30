import { ServicoDetalharRelease } from "../../servico/release/servicoDetalharRelease";
import { Response, Request } from "express";

class ControleDetalharRelease {
    async handle(req: Request, res: Response){
        const {id_release} = req.params;

        const servicoDetalharRelease = new ServicoDetalharRelease();

        const release = await servicoDetalharRelease.executar({id_release})

        return res.json(release)
    }
}

export {ControleDetalharRelease}