import { ServicoCriarVideo } from "../../servico/video/servicoCriarVideo";
import { Request, Response } from "express";

class ControleCriarVideo {
    async handle(req: Request, res: Response){
        const {id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order} = req.body

        const servicocriarvideo = new ServicoCriarVideo();
        
        const video = await servicocriarvideo.executar({ 
            id_sistema, 
            id_modulo, 
            id_submodulo, 
            id_aula, 
            nome_video, 
            link, 
            observacao, 
            order            
        })
        return res.json(video);
    } 
}

export {ControleCriarVideo}