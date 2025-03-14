import { ServicoContarSistemas } from "../../servico/dashboard/servicoContarSistemas";
import { Request, Response } from "express";

class ControleContarSistemas {
    async handle(req: Request, res: Response){
        const servicoContarSistemas = new ServicoContarSistemas();

        const contarsistemas = await servicoContarSistemas.executar();

        return res.json(contarsistemas)
    }
}

export {ControleContarSistemas}