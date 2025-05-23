import { ServicoListarProva } from "../../servico/prova/servicoListarProva";
import { Response, Request } from "express";

class ControleListarProva {
    async handle(req:Request, res: Response){
        const {id_prova, id_sistema, nome_prova, id_modulo, id_submodulo, status, id_usuario, finalizado} = req.query;
        const filtros = {
            id_prova     : id_prova,
            id_sistema   : id_sistema,
            id_modulo    : id_modulo,
            id_submodulo : id_submodulo,
            nome_prova   : nome_prova,
            status       : status == 'true' ? true : status =='false' ? false : undefined,
            id_usuario   : Number(id_usuario),
            finalizado   : finalizado ==='true' ? true : finalizado ==='false' ? false : undefined,

        }
        const servicolistarprovas = new ServicoListarProva();
        
        const provas = await servicolistarprovas.executar(filtros)

        return res.json(provas)
    }
}

export {ControleListarProva}