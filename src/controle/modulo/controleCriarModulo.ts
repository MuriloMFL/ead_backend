import { ServicoCriarModulo } from "../../servico/modulo/servicoCriarModulo";
import { Response, Request } from "express";

class ControleCriarModulo {
    async handle(req: Request, res:Response){
        const {id_sistema, nome_modulo} = req.body;

        const servicocriarmodulo = new ServicoCriarModulo();

        try {
            const modulo = await servicocriarmodulo.executar(nome_modulo, id_sistema)

            return res.json(modulo);
        }catch (erro){
            throw new Error (erro)
        }
    }
}

export {ControleCriarModulo}