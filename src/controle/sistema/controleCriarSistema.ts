import { ServicoCriarSistema } from "../../servico/sistema/servicoCriarSistema";
import { Request, Response } from "express";

class ControleCriarSistema {
    async handle(req: Request, res: Response){
        const {
            nome_sistema,
        } = req.body;

        const servicoCriarSistema = new ServicoCriarSistema();

        const sistema = await servicoCriarSistema.executar({
            nome_sistema,
        });

        return res.json({sistema})
    }
}

export {ControleCriarSistema}