import { ServicoAtualizarRelease } from "../../servico/release/servicoAtualizarRelease";
import { Request, Response } from "express";

class ControleAtualizarRelease {
    async handle(req: Request, res: Response){
        const {
            id_release, numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao
        } = req.body

        const servicoAtualizarRelease = new ServicoAtualizarRelease();

        const release = await servicoAtualizarRelease.executar({
            id_release, 
            numero_release, 
            versao_gestores, 
            versao_sincdata, 
            versao_gestorpdv, 
            versao_balcao
        })

        return res.json(release)
    }
}

export {ControleAtualizarRelease}