import { Response, Request } from "express";
import { ServicoContarVideos } from "../../servico/dashboard/servicoCriarVideos";

class ControleContarVideos {
    async handle(req: Request, res: Response){

        const servicoContarVideos = new ServicoContarVideos();

        const contarVideos = await servicoContarVideos.executar();

        return res.json(contarVideos);
    }
}

export {ControleContarVideos}