import { ServicoCriarMVVideo } from "../../servico/video_mv/servicoCriarMvVideo";
import { Response, Request } from "express";

class ControleCriarMvVideo {
    async handle(req: Request, res: Response){
        const {id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_video} = req.body

        const servicoCriarMvVideo = new ServicoCriarMVVideo()

        const video_mv = await servicoCriarMvVideo.executar({
            id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_video
        })
        
        return res.json(video_mv)
    }
}

export {ControleCriarMvVideo}