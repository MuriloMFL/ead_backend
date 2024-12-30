import { ServicoDetalharModulo } from "../../servico/modulo/servicoDetalharmodulo";
import { Request, Response } from "express";

class ControleDetalharModulo {
    async handle (req: Request, res: Response){
        const {id_modulo} = req.params

        const servicodetalharmodulo = new ServicoDetalharModulo();

        try {
            const modulo = await servicodetalharmodulo.executar(Number(id_modulo))
            return res.status(200).json(modulo)
        }catch (Erro){
            console.error("Erro ao detalhar modulo", Erro);
            return res.status(500).json({error: "Erro interno no servidor"})
        }
    }
}

export {ControleDetalharModulo}