import { ServicoDetalharFranquia } from "../../servico/franquia/servicoDetalharFranquia";
import { Request, Response } from "express";

class ControleDetalharFranquia {
    async handle(req: Request, res: Response){
        const { id_franquia } = req.params;

        if (isNaN(Number(id_franquia))) {
            return res.status(400).json({ erro: "ID da franquia inválido." });
        }

        if (!id_franquia) {
            return res.status(400).json({erro: "ID da franquia obrigatorio"})
        }

        try{
            const servicoDetalharfranquia = new ServicoDetalharFranquia();
            const franquia = await servicoDetalharfranquia.executar(Number(id_franquia));
            
            if (!franquia) {
                return res.status(404).json({ error: "Franquia não encontrada." });
              }

            return res.json(franquia);
        }catch(erro){
            return res.status(500).json({error: erro.message});
        }

    }
}

export {ControleDetalharFranquia}