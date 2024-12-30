import { ServicoListarReleaseItem } from "../../servico/release_item/servicoListarReleaseItem";
import { Response, Request } from "express";

interface ReleaseItemProps {
    id_item_release  : number,
    nome_release     : string,
    numero_release   : number,
    id_release       : number,
    id_sistema       : number,
    id_modulo        : number,
    id_submodulo     : number,
    correcao         : boolean,
    alteracao        : boolean
}

class ControleListarReleaseItem{
    async handle(req: Request, res: Response){
        const {id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao} : ReleaseItemProps = req.body

        const filtros = {
            id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao
        }
        const servicoListarReleaseItem = new ServicoListarReleaseItem();

        const releaseItem = await servicoListarReleaseItem.executar({filtros});

        return res.json(releaseItem)
    }
}

export {ControleListarReleaseItem}