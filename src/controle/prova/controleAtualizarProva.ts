import { ServicoAtualizarProva } from "../../servico/prova/servicoAtualizarProva";
import { Response, Request } from "express";

class ControleAtualizarProva {
    async handle(req: Request, res: Response){
        const {id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente} = req.body;

        const servicoatualizarprova = new ServicoAtualizarProva();

        const prova = await servicoatualizarprova.executar({
            id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente
        })

        return res.json(prova)
    }
}

export {ControleAtualizarProva}