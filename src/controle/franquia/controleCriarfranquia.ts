import { Request, Response } from "express";
import { ServicoCriarFranquia } from "../../servico/franquia/servicoCriarFranquia";

class ControleCriarFranquia{
    async handle (req:Request, res: Response){
        const {
            nome,
            responsavel, 
            telefone,
            status
        } = req.body;

        const servicocriarfranquia = new ServicoCriarFranquia(); 

        const franquia = await servicocriarfranquia.executar({
            nome,
            responsavel,
            telefone,
            status
        });

        return res.json({franquia})
    }    
}

export {ControleCriarFranquia};