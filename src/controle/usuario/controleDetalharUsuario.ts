import { ServicoDetalharUsuario } from "../../servico/usuario/servicoDetalharUsuario";
import { Request, Response } from "express";

class ControleDetalharUsuario{
    async handle(req: Request, res: Response){

        const id_usuario = Number(req.id_usuario);

        const servicoDetalharUsuario = new ServicoDetalharUsuario();

        const usuario = await servicoDetalharUsuario.executar(id_usuario);

        return res.json(usuario);
    }
}

export {ControleDetalharUsuario}