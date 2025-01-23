"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleAtualizarPlanejamento = void 0;
const servicoAtualizarPlanejamento_1 = require("../../servico/planejamento/servicoAtualizarPlanejamento");
class ControleAtualizarPlanejamento {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_planejamento, nome_planejamento, id_sistema, id_modulo, id_submodulo, id_usuario, modulo_novo, previsao_inicio, previsao_fim, etapa_elicitacao, etapa_roteiro, etapa_video, etapa_validacao, etapa_finalizado, proposta, roteiro, impedimentos, observacoes } = req.body;
            const servicoAtualizarPlanejamento = new servicoAtualizarPlanejamento_1.ServicoAtualizarPlanejamento();
            const Planejamento = yield servicoAtualizarPlanejamento.executar({
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
            });
            return res.json(Planejamento);
        });
    }
}
exports.ControleAtualizarPlanejamento = ControleAtualizarPlanejamento;
