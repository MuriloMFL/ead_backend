import { ServicoCriarAula } from "../../servico/aula/servicoCriarAula";
import { Response, Request } from "express";
interface AulaProps {
    id_sistema    : number,
    id_submodulo  : number,
    id_modulo     : number,
    nome_aula     : string,
    cliente       : boolean,  
}
class ControleCriarAula {
    async handle(req: Request, res: Response){
        const {id_sistema, id_submodulo, id_modulo, nome_aula, cliente}: AulaProps = req.body

        const servicocriaraula = new ServicoCriarAula();

        const aula = await servicocriaraula.executar({
            id_sistema, id_submodulo, id_modulo, nome_aula, cliente
        })

        return res.json(aula)
    }
}

export {ControleCriarAula}