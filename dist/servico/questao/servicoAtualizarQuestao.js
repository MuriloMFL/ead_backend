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
exports.ServicoAtualizarQuestao = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoAtualizarQuestao {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_questao, id_sistema, id_submodulo, id_modulo, id_aula, id_prova, questao, alternativa_A, alternativa_B, alternativa_C, alternativa_D, correta, observacao, order }) {
            var _b;
            try {
                const questoes = yield prisma_1.default.questao.update({
                    where: {
                        id_questao: Number(id_questao)
                    }, data: {
                        id_sistema: (_b = Number(id_sistema)) !== null && _b !== void 0 ? _b : null,
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        id_aula: Number(id_aula),
                        id_prova: Number(id_prova),
                        questao: questao,
                        alternativa_A: alternativa_A,
                        alternativa_B: alternativa_B,
                        alternativa_C: alternativa_C,
                        alternativa_D: alternativa_D,
                        correta: correta,
                        observacao: observacao,
                        order: Number(order)
                    }
                });
                return questoes;
            }
            catch (err) {
                console.error(err);
                throw new Error(err);
            }
        });
    }
}
exports.ServicoAtualizarQuestao = ServicoAtualizarQuestao;
