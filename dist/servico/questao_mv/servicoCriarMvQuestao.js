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
exports.ServicoCriarMvQuestao = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoCriarMvQuestao {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_sistema, id_submodulo, id_modulo, id_aula, id_prova, id_usuario, id_franquia, id_questao, alternativa_marcada }) {
            const verificaAlternativa = yield prisma_1.default.questao.findFirst({
                where: {
                    id_questao: Number(id_questao),
                    correta: String(alternativa_marcada)
                }
            });
            const verificaSeExiste = yield prisma_1.default.mv_Questao.findFirst({
                where: {
                    id_sistema: Number(id_sistema),
                    id_submodulo: Number(id_submodulo),
                    id_modulo: Number(id_modulo),
                    id_aula: Number(id_aula),
                    id_prova: Number(id_prova),
                    id_usuario: Number(id_usuario),
                    id_franquia: Number(id_franquia),
                    id_questao: Number(id_questao)
                }
            });
            if (!verificaSeExiste) {
                try {
                    const certo_errado = verificaAlternativa ? "C" : "E";
                    const questao_mv = prisma_1.default.mv_Questao.create({
                        data: {
                            id_sistema: Number(id_sistema),
                            id_submodulo: Number(id_submodulo),
                            id_modulo: Number(id_modulo),
                            id_aula: Number(id_aula),
                            id_prova: Number(id_prova),
                            id_usuario: Number(id_usuario),
                            id_franquia: Number(id_franquia),
                            id_questao: Number(id_questao),
                            certo_errado: certo_errado
                        }
                    });
                    return questao_mv;
                }
                catch (error) {
                    throw new Error('Erro no servico de criar mv questao');
                }
            }
        });
    }
}
exports.ServicoCriarMvQuestao = ServicoCriarMvQuestao;
