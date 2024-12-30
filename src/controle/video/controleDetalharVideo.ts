import { ServicoDetalharVideo } from "../../servico/video/servicoDetalharVideo";
import { Response, Request } from "express";

class ControleDetalharVideo {
    async handle(req: Request, res: Response){
        const {id_video} = req.params

        const servicodetalharvideo = new ServicoDetalharVideo();

        const video = await servicodetalharvideo.executar(
            Number(id_video)
        )

        return res.json(video)
    }
}

export {ControleDetalharVideo}