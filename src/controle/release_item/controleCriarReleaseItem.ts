import { ServicoCriarReleaseItem } from "../../servico/release_item/servicoCriarReleaseItem";
import { Response, Request } from "express";

class ControleCriarReleaseItem {
    async handle (req: Request, res: Response){
        const {  
        nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
        } = req.body

        const servicoCriarReleaseItem = new ServicoCriarReleaseItem();

        const releaseItem = await servicoCriarReleaseItem.executar({
            nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
        })

        return res.json(releaseItem)
    }
}

export {ControleCriarReleaseItem}