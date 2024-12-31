import { ServicoAtualizarVideo } from "../../servico/video/servicoAtualizarVideo";
import { Request, Response } from "express";

interface Video {
    id_video        : number,
    id_sistema      : number, 
    id_modulo       : number, 
    id_submodulo    : number, 
    id_aula         : number, 
    nome_video      : string,  
    link            : string,  
    observacao      : string,  
    order           : number
}

class ControleAtualizarVideo {
    async handle(req: Request, res: Response){
        const {id_video, id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order}: Video = req.body

        const servicoatualizarvideo = new ServicoAtualizarVideo();

        const video = await servicoatualizarvideo.executar(
            {id_video, id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order
                
            });

        return res.json(video)
    }
}

export {ControleAtualizarVideo}