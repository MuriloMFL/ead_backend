import { ServicoAtualizarFranquia } from "../../servico/franquia/servicoAtualizarFranquia";
import { Request, Response } from "express";

class ControleAtualizarFranquia {
    async handle(req: Request, res: Response) {
        const { id_franquia, nome, responsavel, telefone } = req.body;
        
        if (!id_franquia) {
            return res.status(400).json({ erro: "ID da franquia obrigatorio" });
        }
        
        try {
            const servicoAtualizarFranquia = new ServicoAtualizarFranquia();
            const franquia = await servicoAtualizarFranquia.executar(Number(id_franquia), nome, responsavel, telefone);

            return res.json(franquia);

        } catch (erro) {
            return res.status(500).json({ error: erro.message });
        }
    }
}

export {ControleAtualizarFranquia}