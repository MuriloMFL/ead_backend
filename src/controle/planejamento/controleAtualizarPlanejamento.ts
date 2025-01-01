import { ServicoAtualizarPlanejamento } from "../../servico/planejamento/servicoAtualizarPlanejamento";
import { Request, Response } from "express";

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
        } = req.body

    const servicoAtualizarPlanejamento = new ServicoAtualizarPlanejamento();
    console.log( id_planejamento,       
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