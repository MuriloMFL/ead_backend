import { ServicoDetalharSistema } from "../../servico/sistema/servicoDetalharSistema";
import { Request, Response } from "express";

class ControleDetalharSistema {
    async handle(req: Request, res: Response){
        const {id_sistema} = req.params;

        const servivodetalharsistema = new ServicoDetalharSistema();

        const sistema = await servivodetalharsistema.executar(Number(id_sistema))
        
        return res.json(sistema)
    }
}

export {ControleDetalharSistema}