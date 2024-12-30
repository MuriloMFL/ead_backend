import { ServicoTrocarStatusAula } from "../../servico/aula/servicoTrocarStatusAula";
import { Request, Response } from "express";
interface AulaProps {
    id_aula: number
}
class ControleTrocarStatusAula {
    async handle(req: Request, res: Response){
        const {id_aula} : AulaProps = req.body

        const servicotrocarstatusaula = new ServicoTrocarStatusAula();

        const aula = await servicotrocarstatusaula.executar({id_aula})

        return res.json(aula)
    }
}

export {ControleTrocarStatusAula}