import { ServicoAtualizarPlanejamento } from "../../servico/planejamento/servicoAtualizarPlanejamento";
import { Request, Response } from "express";

interface PlanejamentoProps {
    id_planejamento   : number
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

class ControleAtualizarPlanejamento {
    async handle(req: Request, res: Response){
        const {
            id_planejamento,
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
            observacoes
        } : PlanejamentoProps = req.body

    const servicoAtualizarPlanejamento = new ServicoAtualizarPlanejamento();

    const Planejamento = await servicoAtualizarPlanejamento.executar({
        id_planejamento,
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
        observacoes
    })
    return res.json(Planejamento)
    }
}

export {ControleAtualizarPlanejamento}