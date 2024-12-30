import { ServicoAtualizarSistema } from "../../servico/sistema/servicoAtualizarSistema";
import { Request, Response } from "express";

interface Sistema {
    id_sistema: number,
    nome_sistema: string,
}

class ControleAtualizarSistema {
    async handle(req: Request, res:Response){
        const {id_sistema, nome_sistema}: Sistema = req.body

        const servicoatualizarsistema = new ServicoAtualizarSistema();

        const sistema = await servicoatualizarsistema.executar({id_sistema, nome_sistema})

        return res.json(sistema)
    }
}

export {ControleAtualizarSistema}