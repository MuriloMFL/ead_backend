import { ServicoCriarVideo } from "../../servico/video/servicoCriarVideo";
import { Request, Response } from "express";
import multerConfig from "../../config/multer";
import multer from "multer";

const upload = multer(multerConfig.upload('src/media/img_video')).single('capa');

class ControleCriarVideo {
  async handle(req: Request, res: Response) {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "Erro no upload da capa." });
      }

      const { id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order } = req.body;
      const capa = req.file ? req.file.filename : null;

      try {
        const servicocriarvideo = new ServicoCriarVideo();
        const video = await servicocriarvideo.executar({
          id_sistema,
          id_modulo,
          id_submodulo,
          id_aula,
          nome_video,
          link,
          observacao,
          order,
          capa,
        });
        return res.json(video);
      } catch (error) {
        return res.status(400).json({ error: "Erro no serviço de criar Video" });
      }
    });
  }
}

export { ControleCriarVideo };
