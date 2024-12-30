import { ServicoDetalharProva } from "../../servico/prova/servicoDetalharProva";
import { Request, Response } from "express";

class ControleDetalharProva {
    async handle(req: Request, res: Response){
        const {id_prova} = req.params;

        const servidordetalharprova = new ServicoDetalharProva();

        const prova = await servidordetalharprova.executar({id_prova})

        return res.json(prova)
    }
}

export {ControleDetalharProva}