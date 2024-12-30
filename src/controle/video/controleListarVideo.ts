import { ServicoListarVideo } from "../../servico/video/servicoListarVideo";
import { Response, Request } from "express";

class ControleListarVideo {
    async handle(req: Request, res: Response){
        const {id_sistema, id_modulo, id_submodulo, nome_video, status} = req.query

        const filtros = {
            id_sistema   : id_sistema,
            id_modulo    : id_modulo,
            id_submodulo : id_submodulo,
            nome_video   : nome_video,
            status       : status == 'true' ? true : status == 'false' ? false : undefined
        }

        const servicolistarvideo = new ServicoListarVideo();

        const video = await servicolistarvideo.executar(filtros)

        return res.json(video)
    }
}

export {ControleListarVideo}