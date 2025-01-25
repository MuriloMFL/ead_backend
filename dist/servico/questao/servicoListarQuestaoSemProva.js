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
exports.ServicoListarQuestaoSemProva = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarQuestaoSemProva {
    executar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questaoSemProva = yield prisma_1.default.questao.findMany({
                    where: {
                        id_aula: null,
                        id_prova: null
                    }
                });
                return questaoSemProva.map((Questoes) => ({
                    id_questao: Questoes.id_questao,
                    questoes: Questoes.questao
                }));
            }
            catch (error) {
                console.error(error);
                throw new Error('Erro ao Buscar dados');
            }
        });
    }
}
exports.ServicoListarQuestaoSemProva = ServicoListarQuestaoSemProva;
