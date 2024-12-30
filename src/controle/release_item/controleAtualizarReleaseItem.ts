import { ServicoAtualizarReleaseItem } from "../../servico/release_item/servicoAtualizarReleaseItem";
import { Request, Response } from "express";

class ControleAtualizarReleaseItem {
    async handle(req: Request, res: Response){
        const {  
            id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
            } = req.body
        
        const servicoAtualizarReleaseItem = new ServicoAtualizarReleaseItem();

        const ReleaseItem  = await servicoAtualizarReleaseItem.executar({
            id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
        });

        return res.json(ReleaseItem);
    }
}

export {ControleAtualizarReleaseItem}