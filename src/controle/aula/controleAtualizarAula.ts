import { ServicoAtualizarAula } from "../../servico/aula/servicoAtualizarAula";
import { Response, Request } from "express";

interface AulaProps {
    id_aula       : number,
    id_sistema    : number,
    id_submodulo  : number,
    id_modulo     : number,
    nome_aula     : string,
    cliente       : boolean,  
}

class ControleAtualizarAula {
    async handle(req: Request, res: Response){
        const {id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente}: AulaProps = req.body
        
        const servicoatualizaraula = new ServicoAtualizarAula();

        const aula = await servicoatualizaraula.executar({
            id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente
        })

        return res.json(aula)
    }
}

export {ControleAtualizarAula}