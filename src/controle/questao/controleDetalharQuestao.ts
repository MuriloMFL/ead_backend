import { Request, Response } from "express";
import { ServicoDetalharQuestao } from "../../servico/questao/servicoDetalharQuestao";

class ControleDetalharQuestao {
    async handle(req: Request, res: Response){
        const {id_questao} = req.params;

        const servicodetalharquestao = new ServicoDetalharQuestao();

        const questao = await servicodetalharquestao.executar(Number(id_questao));

        return res.json(questao)
    }
}

export {ControleDetalharQuestao}