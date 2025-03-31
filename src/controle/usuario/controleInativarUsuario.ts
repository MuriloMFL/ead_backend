import { ServicoInativarUsuario } from "../../servico/usuario/servicoInativarUsuario";
import { Request, Response } from "express";

class ControleInativarUsuario {
    async handle(req: Request, res: Response){
        const {id_usuario} = req.body;
        const servicoInativarUsuario = new ServicoInativarUsuario();

        try {
            const Usuario = await servicoInativarUsuario.executar(id_usuario)
            return res.json(Usuario);
        }catch (error){
            return res.json("Erro ao tentar inativar usuário")
        }

    }
}

export {ControleInativarUsuario}