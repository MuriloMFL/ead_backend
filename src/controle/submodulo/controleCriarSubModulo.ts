import { ServicoCriarSubModulo } from "../../servico/submodulo/servicoCriarSubModulo";
import { Response, Request } from "express";

class ControleCriarSubModulo {
    async handle(req: Request, res: Response){
        const {nome_submodulo, id_modulo, id_sistema} = req.body;

        const servicoCriarSubModulo = new ServicoCriarSubModulo();

        const submodulo = await servicoCriarSubModulo.executar({nome_submodulo, id_modulo, id_sistema})

        return res.json(submodulo)
    }
}

export {ControleCriarSubModulo}