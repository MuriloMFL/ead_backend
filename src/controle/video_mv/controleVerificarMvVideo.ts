import { ServicoVerificarMvVideo } from "../../servico/video_mv/servicoVerificarMvVideo";
import { Response, Request } from "express";

class ControleVerificarMvVideo {
    async handle(req: Request, res: Response){
        const {id_video, id_usuario} = req.query

        const servicoverificarmvvideo = new ServicoVerificarMvVideo();

        const video = await servicoverificarmvvideo.executar(
            Number(id_video)
        )

        return res.json(video)
    }
}

export {ControleVerificarMvVideo}