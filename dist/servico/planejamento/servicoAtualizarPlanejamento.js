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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoAtualizarPlanejamento = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoAtualizarPlanejamento {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_planejamento, nome_planejamento, id_sistema, id_modulo, id_submodulo, id_usuario, modulo_novo, previsao_inicio, previsao_fim, etapa_elicitacao, etapa_roteiro, etapa_video, etapa_validacao, etapa_finalizado, proposta, roteiro, impedimentos, observacoes }) {
            try {
                const planejamento = yield prisma_1.default.planejamento.update({
                    data: {
                        nome_planejamento: nome_planejamento,
                        id_sistema: Number(id_sistema),
                        id_modulo: Number(id_modulo),
                        id_submodulo: Number(id_submodulo),
                        id_usuario: Number(id_usuario),
                        modulo_novo: Boolean(modulo_novo),
                        previsao_inicio: new Date(previsao_inicio),
                        previsao_fim: new Date(previsao_fim),
                        etapa_elicitacao: Boolean(etapa_elicitacao),
                        etapa_roteiro: Boolean(etapa_roteiro),
                        etapa_video: Boolean(etapa_video),
                        etapa_validacao: Boolean(etapa_validacao),
                        etapa_finalizado: Boolean(etapa_finalizado),
                        proposta: proposta,
                        roteiro: roteiro,
                        impedimentos: impedimentos,
                        observacoes: observacoes
                    }, where: {
                        id_planejamento: Number(id_planejamento)
                    }
                });
                return planejamento;
            }
            catch (error) {
                throw new Error('Erro no serviço de atualizar planejamento');
            }
        });
    }
}
exports.ServicoAtualizarPlanejamento = ServicoAtualizarPlanejamento;
