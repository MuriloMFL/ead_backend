import { ServicoDetalharSubModulo } from "../../servico/submodulo/servicoDetalharSubModulo";
import { Response, Request } from "express";

class ControleDetalharSubModulo {
    async handle(req: Request, res: Response){
        const {id_submodulo} = req.params

        const servicodetalharsubmodulo = new ServicoDetalharSubModulo();

        const submodulo = await servicodetalharsubmodulo.executar(id_submodulo); 

        return res.json(submodulo)
    }
}

export {ControleDetalharSubModulo}