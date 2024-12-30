import { ServicoCriarPlanejamento } from "../../servico/planejamento/servicoCriarPlanejamento";
import { Response, Request } from "express";

interface PlanejamentoProps {
    nome_planejamento : string
    id_sistema        : number
    id_modulo         : number
    id_submodulo      : number
    id_usuario        : number
    modulo_novo       : boolean
    previsao_inicio   : Date
    previsao_fim      : Date
    etapa_elicitacao  : boolean
    etapa_roteiro     : boolean
    etapa_video       : boolean
    etapa_validacao   : boolean
    etapa_finalizado  : boolean
    proposta          : string
    roteiro           : string
    impedimentos      : string
    observacoes       : string
}

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
            observacoes}: PlanejamentoProps = req.body

        const servicoCriarPlanejamento = new ServicoCriarPlanejamento();

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