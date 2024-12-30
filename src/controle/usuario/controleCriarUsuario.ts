import { Request, Response } from "express";
import { ServicoCriarUsuario } from "../../servico/usuario/servicoCriarUsuario";

class ControleCriarUsuario {
    async handle (req:Request, res: Response){
        try {
        const {
            nome_usuario,
            email, 
            login,
            senha,
            id_franquia,
            tipo_usuario,
            status
        } = req.body;

        const servicocriarusuario = new ServicoCriarUsuario(); 

        const usuario = await servicocriarusuario.executar({
            nome_usuario,
            email,
            login,
            senha,
            id_franquia,
            tipo_usuario,
            status
        });

            return res.status(201).json({ usuario });
        }catch(error){
            return res.status(400).json({error: error.message});
        }
    }    
}

export {ControleCriarUsuario};