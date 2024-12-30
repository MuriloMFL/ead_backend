import { ServicoListarPlanejamento } from "../../servico/planejamento/servicoListarPlanejamento";
import { Request, Response } from "express";

class ControleListarPlanejamento {
    async handle(req: Request, res: Response){
        const {
            id_planejamento, nome_planejamento, status, etapa_finalizado
        } = req.query

        const filtros = {
            id_planejamento:     id_planejamento ? Number(id_planejamento) : undefined,
            nome_planejamento,
            status : status === 'true' ? true : status === 'false' ? false : false,
            etapa_finalizado: etapa_finalizado ==='true' ? true : etapa_finalizado ==='false' ? false : false
        };

        const servicoListarPlanejamento = new ServicoListarPlanejamento();

        const planejamento = await servicoListarPlanejamento.executar({filtros})

        return res.json(planejamento)
    }
}

export {ControleListarPlanejamento}