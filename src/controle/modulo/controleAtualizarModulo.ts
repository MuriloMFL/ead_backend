import { ServicoAtualizarModulo } from "../../servico/modulo/servicoAtualizarModulo";
import { Response, Request } from "express";

class ControleAtualizarModulo {
    async handle(req: Request, res: Response){
        const {id_modulo, nome_modulo, id_sistema} = req.body

        const servicoatualizarmodulo = new ServicoAtualizarModulo();

        const modulo = await servicoatualizarmodulo.executar({id_modulo, nome_modulo, id_sistema});

        return res.json(modulo)
    }
}

export {ControleAtualizarModulo}