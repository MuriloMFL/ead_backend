import { ServicoTrocarStatusFranquia } from "../../servico/franquia/servicoTrocarStatusFranquia"; 
import { Request, Response } from "express";

class ControleTrocarStatusFranquia {
    async handle(req: Request, res: Response){
        const {id_franquia} = req.body;

        const servicoTrocarStatusFranquia = new ServicoTrocarStatusFranquia();

        try {
            const trocarStatusFranquia = await servicoTrocarStatusFranquia.executar({id_franquia})
            return res.json(trocarStatusFranquia);
        }catch (error){
            return res.json("Erro ao tentar Trocar Status Franquia")
        }
    }
}

export {ControleTrocarStatusFranquia}