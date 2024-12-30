import { ServicoLogarUsuario } from "../../servico/usuario/servicoLogarUsuario";
import { Request, Response } from "express";

class ControleLogarUsuario{
    async handle (req: Request, res: Response){
        const {login, senha} = req.body;

        const servicoLogarUsuario = new ServicoLogarUsuario();

        const logar = await servicoLogarUsuario.executar({
            login,
            senha
        })
        return res.json(logar)
        
    }
}

export {ControleLogarUsuario}