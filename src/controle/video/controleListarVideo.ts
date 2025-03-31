import { ServicoListarVideo } from "../../servico/video/servicoListarVideo";
import { Response, Request } from "express";

class ControleListarVideo {
    async handle(req: Request, res: Response){
        const {id_video, id_sistema, id_modulo, id_submodulo, nome_video, status, finalizado, id_usuario} = req.query

        const filtros = {
            id_video     : id_video,
            id_sistema   : id_sistema,
            id_modulo    : id_modulo,
            id_submodulo : id_submodulo,
            nome_video   : nome_video,
            status       : status == 'true' ? true : status == 'false' ? false : undefined,
            id_usuario   : Number(id_usuario),
            finalizado   : finalizado ==='true' ? true : finalizado ==='false' ? false : undefined,
        }

        const servicolistarvideo = new ServicoListarVideo();

        const video = await servicolistarvideo.executar(filtros)

        return res.json(video)
    }
}

export {ControleListarVideo}