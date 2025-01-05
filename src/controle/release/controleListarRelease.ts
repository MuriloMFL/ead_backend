import { ServicoListarRelease } from "../../servico/release/servicoListarRelease";
import { Response, Request } from "express";

class ControleListarRelease {
    async handle(req: Request, res: Response){
        const {id_release, status, numero_release, finalizado} = req.query

        const filtros = {
            id_release      : id_release ? Number(id_release) : undefined,
            status          : status === 'true' ? true : status === 'false' ? false : undefined,
            numero_release  : numero_release ? Number(numero_release): undefined, 
            finalizado      : finalizado === 'true' ? true : finalizado === 'false' ? false : undefined,
        }
        const servicolistarrelease = new ServicoListarRelease();

        const release = await servicolistarrelease.executar({filtros})
        return res.json(release)    
    }
}

export {ControleListarRelease}