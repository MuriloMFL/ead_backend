import { ServicoListaSubModulo } from "../../servico/submodulo/servicoListarSubModulo";
import { Request, Response } from "express";

class ControleListarSubModulo {
    async handle(req: Request, res: Response){
        const {id_submodulo, nome_submodulo, id_sistema, id_modulo, status} = req.query

        const filtros = {
            nome_submodulo: nome_submodulo as string | undefined,
            id_submodulo: id_submodulo ? Number(id_submodulo) : undefined,
            id_modulo: id_modulo ? Number(id_modulo) : undefined,
            status: status === 'true' ? true : status === 'false' ? false : undefined,
            id_sistema: id_sistema ? Number(id_sistema) : undefined,
        }
        const servicolistarsubmodulo = await new ServicoListaSubModulo();

        const submodulo = await servicolistarsubmodulo.executar(filtros)

        return res.json(submodulo)
    }
}

export {ControleListarSubModulo}