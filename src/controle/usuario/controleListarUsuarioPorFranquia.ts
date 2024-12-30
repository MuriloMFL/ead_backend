import { ServicoListarUsuarioPorFranquia } from "../../servico/usuario/servicoListarUsuarioPorFranquia";
import { Response, Request} from "express";

class ControleListarUsuarioPorFranquia {
    async handle(req: Request, res: Response){

        const {id_franquia, status, nome_usuario} = req.query ;

        const filtros = {
            id_franquia  : id_franquia, 
            status       : status ==='true' ? true : status==='false' ? false : undefined, 
            nome_usuario : nome_usuario 
        }

        
        const servicoListarUsuarioPorFranquia = new ServicoListarUsuarioPorFranquia();

        const usuarios = await servicoListarUsuarioPorFranquia.executar(filtros);
        
        return res.json(usuarios);
    }
}

export {ControleListarUsuarioPorFranquia}