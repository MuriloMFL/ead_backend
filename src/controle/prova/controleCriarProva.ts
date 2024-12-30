import { ServicoCriarProva } from "../../servico/prova/servicoCriarProva";
import { Request, Response } from "express";
interface ProvaProps {
    id_sistema     : number,
    id_submodulo   : number,
    id_modulo      : number,
    nome_prova     : string
    cliente        : boolean  
}
class ControleCriarProva {
    async handle(req: Request, res: Response){
        const {id_sistema, id_submodulo, id_modulo, nome_prova, cliente}: ProvaProps = req.body

        const servicocriarprova = new ServicoCriarProva();

        const prova = await servicocriarprova.executar({id_sistema, id_submodulo, id_modulo, nome_prova, cliente})

        return res.json(prova)

    }
}

export {ControleCriarProva}