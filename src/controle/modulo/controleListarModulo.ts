import { ServicoListarModulo } from "../../servico/modulo/servicoListarModulo";
import { Request, Response } from "express";

class ControleListarModulo {
    async handle(req: Request, res: Response) {
        const { nome_modulo, status, id_sistema, id_modulo } = req.query;

        const statusFilter = status === 'true' ? true : status === 'false' ? false : undefined;

        const filtros = {
            nome_modulo: nome_modulo ? String(nome_modulo) : undefined,
            status: statusFilter,
            id_sistema: id_sistema ? Number(id_sistema) : undefined,
            id_modulo: id_modulo ? Number(id_modulo) : undefined,
        };

        const servicoListarModulo = new ServicoListarModulo();

        try {
            const modulos = await servicoListarModulo.executar(filtros);
            return res.status(200).json(modulos);
        } catch (error) {
            console.error("Erro ao listar módulos:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    }
}

export { ControleListarModulo };
