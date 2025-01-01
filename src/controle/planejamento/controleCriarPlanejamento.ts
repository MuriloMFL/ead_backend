import { ServicoCriarPlanejamento } from "../../servico/planejamento/servicoCriarPlanejamento";
import { Response, Request } from "express";

class ControleCriarPlanejamento {
    async handle(req: Request, res: Response){
        const {  
            nome_planejamento,
            id_sistema,
            id_modulo,
            id_submodulo,
            id_usuario,
            modulo_novo,
            previsao_inicio,
            previsao_fim,
            etapa_elicitacao,
            etapa_roteiro,
            etapa_video,
            etapa_validacao,
            etapa_finalizado,
            proposta,
            roteiro,
            impedimentos,
            observacoes} = req.body

        const servicoCriarPlanejamento = new ServicoCriarPlanejamento();

        console.log(        
            nome_planejamento,
            id_sistema,
            id_modulo,
            id_submodulo,
            id_usuario,
            modulo_novo,
            previsao_inicio,
            previsao_fim,
            etapa_elicitacao,
            etapa_roteiro,
            etapa_video,
            etapa_validacao,
            etapa_finalizado,
            proposta,
            roteiro,
            impedimentos,
            observacoes)

        const planejamento = await servicoCriarPlanejamento.executar({
            nome_planejamento,
            id_sistema,
            id_modulo,
            id_submodulo,
            id_usuario,
            modulo_novo,
            previsao_inicio,
            previsao_fim,
            etapa_elicitacao,
            etapa_roteiro,
            etapa_video,
            etapa_validacao,
            etapa_finalizado,
            proposta,
            roteiro,
            impedimentos,
            observacoes,
        })

        return res.json(planejamento)
    }
}

export {ControleCriarPlanejamento}