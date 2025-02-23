import { ServicoAtualizarVideo } from "../../servico/video/servicoAtualizarVideo";
import { Request, Response } from "express";
import multerConfig from "../../config/multer";
import multer from "multer";

interface Video {
    id_video        : number,
    id_sistema      : number, 
    id_modulo       : number, 
    id_submodulo    : number, 
    id_aula         : number, 
    nome_video      : string,  
    link            : string,  
    observacao      : string,  
    order           : number,
    capa            : string
}

const upload = multer(multerConfig.upload('src/media/img_video')).single('capa');

class ControleAtualizarVideo {
    async handle(req: Request, res: Response){
        upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: "Erro no upload da capa." });
        }
        
        const {id_video, id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order}: Video = req.body
        const capa = req.file ? req.file.filename : null;
        
        const servicoatualizarvideo = new ServicoAtualizarVideo();
        const video = await servicoatualizarvideo.executar(
            {id_video, id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order, capa
                
            });

        return res.json(video)
    });
    }
}

export {ControleAtualizarVideo}