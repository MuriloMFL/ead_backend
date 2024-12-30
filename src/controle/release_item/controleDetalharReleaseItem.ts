import { ServicoDetalharReleaseItem } from "../../servico/release_item/servicoDetalharReleaseItem";
import { Request, Response } from "express";

class ControleDetalharReleaseItem {
    async handle(req: Request, res: Response){
        const {id_item_release} = req.params

        const servicoDetalharReleaseItem = new ServicoDetalharReleaseItem();

        const releaseItem = await servicoDetalharReleaseItem.executar({id_item_release})

        return res.json(releaseItem)
    }
}

export {ControleDetalharReleaseItem}