import { ServicoDetalharCadUsuario } from "../../servico/usuario/servicoDetalharCadUsuario";
import { Request, Response } from "express";

class ControleDetalharCadUsuario{
    async handle(req: Request, res: Response){

        const {id_usuario} = req.params

        console.log(id_usuario)
        
        const servicoDetalharUsuario = new ServicoDetalharCadUsuario();

        const usuario = await servicoDetalharUsuario.executar({id_usuario});

        return res.json(usuario);
    }
}

export {ControleDetalharCadUsuario}