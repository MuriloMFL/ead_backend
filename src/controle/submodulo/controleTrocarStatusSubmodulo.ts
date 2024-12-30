import { ServicoTrocarStatusSubModulo } from "../../servico/submodulo/servicoTrocarStatusSubmodulo";
import { Request, Response } from "express";

class ControleTrocarStatusSubmodulo {
    async handle (req: Request, res: Response){
        const id_submodulo = req.body

        const servicotrocarstatussubmodulo = new ServicoTrocarStatusSubModulo();

        const submodulo = await servicotrocarstatussubmodulo.executar(id_submodulo);

        return res.json(submodulo)
    }
}

export {ControleTrocarStatusSubmodulo}