import { ServicoDeletarReleaseItem } from "../../servico/release_item/servicoDeletarReleaseItem";
import { Response, Request } from "express";

class ControleDeletarReleaseItem {
    async handle(req: Request, res: Response){
        const {id_item_release} = req.params

        const servicoDeletarReleaseItem = new ServicoDeletarReleaseItem();

        const deletarItemRelease = await servicoDeletarReleaseItem.executar({id_item_release})

        return res.json(deletarItemRelease)
    }
}

export {ControleDeletarReleaseItem}