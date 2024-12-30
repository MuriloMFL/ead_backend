import { ServicoTrocarStatusVideo } from "../../servico/video/servicoTrocarStatusVideo";
import { Request, Response } from "express";

interface video {
    id_video: number
}

class ControleTrocarStatusVideo {
    async handle (req: Request, res: Response){

        const {id_video}: video = req.body

        const servicotrocarstatusvideo = new ServicoTrocarStatusVideo();

        const video = await servicotrocarstatusvideo.executar(id_video);

        return res.json(video)
    }
}

export {ControleTrocarStatusVideo}