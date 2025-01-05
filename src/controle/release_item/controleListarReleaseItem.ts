import { ServicoListarReleaseItem } from "../../servico/release_item/servicoListarReleaseItem";
import { Response, Request } from "express";

class ControleListarReleaseItem{
    async handle(req: Request, res: Response){
        const {id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao} = req.query

        const filtros = {
            id_item_release, 
            nome_release, 
            numero_release, 
            id_release : id_release ? Number(id_release) : undefined,
            id_sistema, 
            id_modulo, 
            id_submodulo, 
            correcao, 
            alteracao
        }
        const servicoListarReleaseItem = new ServicoListarReleaseItem();

        const releaseItem = await servicoListarReleaseItem.executar(filtros);

        return res.json(releaseItem)
    }
}

export {ControleListarReleaseItem}