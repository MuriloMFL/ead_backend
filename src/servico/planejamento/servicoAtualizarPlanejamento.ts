import prismaClient from "../../prisma";

class ServicoAtualizarPlanejamento {
    async executar({
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
    }){
        try {
            const planejamento = await prismaClient.planejamento.update({
                data: {
                    nome_planejamento  : nome_planejamento,
                    id_sistema         : Number(id_sistema),
                    id_modulo          : Number(id_modulo),
                    id_submodulo       : Number(id_submodulo),
                    id_usuario         : Number(id_usuario),
                    modulo_novo        : Boolean(modulo_novo),
                    previsao_inicio    : new Date(previsao_inicio),
                    previsao_fim       : new Date(previsao_fim),
                    etapa_elicitacao   : Boolean(etapa_elicitacao),
                    etapa_roteiro      : Boolean(etapa_roteiro),
                    etapa_video        : Boolean(etapa_video),
                    etapa_validacao    : Boolean(etapa_validacao),
                    etapa_finalizado   : Boolean(etapa_finalizado),
                    proposta           : proposta,
                    roteiro            : roteiro,
                    impedimentos       : impedimentos,
                    observacoes        : observacoes                  
                }, where: {
                    id_planejamento : Number(id_planejamento)
                }
            })
            return planejamento
        } catch (error) {
            throw new Error('Erro no serviço de atualizar planejamento')
        }
    }
}

export {ServicoAtualizarPlanejamento}