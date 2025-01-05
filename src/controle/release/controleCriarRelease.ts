import { ServicoCriarRelease } from "../../servico/release/servicoCriarRelease";
import { Response, Request } from "express";

class ControleCriarRelease {
    async handle(req: Request, res: Response){
        const {numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario, finalizado} = req.body

        const servicocriarrelease = new ServicoCriarRelease();

        const release = await servicocriarrelease.executar({
            numero_release, 
            versao_gestores, 
            versao_sincdata, 
            versao_gestorpdv, 
            versao_balcao,
            id_usuario,
            finalizado : finalizado ? finalizado === 'true' : true ? finalizado === 'false' : false
            })

        return res.json(release)
    }
}

export {ControleCriarRelease}