import { Request, Response } from "express";
import { ServicoAtualizarUsuario } from "../../servico/usuario/servicoAtualizarUsuario";

class ControleAtualizarUsuario {
    async handle (req:Request, res: Response){
        try {
        const {
            id_usuario,
            nome_usuario,
            email, 
            login,
            senha,
            id_franquia,
            tipo_usuario
        } = req.body;

        const servicocriarusuario = new ServicoAtualizarUsuario(); 

        const usuario = await servicocriarusuario.executar({
            id_usuario,
            nome_usuario,
            email,
            login,
            senha,
            id_franquia,
            tipo_usuario
        });
            return res.status(201).json({ usuario });
        }catch(error){
            return res.status(400).json({error: error.message});
        }
    }    
}

export {ControleAtualizarUsuario};