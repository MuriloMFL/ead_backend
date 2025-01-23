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
exports.ServicoListarQuestao = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("@prisma/client");
class ServicoListarQuestao {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                id_questao: filtros.id_questao,
                status: filtros.status,
                questao: filtros.questoes ? { contains: filtros.questoes, mode: client_1.Prisma.QueryMode.insensitive } : undefined,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
                id_submodulo: filtros.id_submodulo,
                id_prova: filtros.id_prova,
                id_aula: filtros.id_aula,
            };
            const buscaquestao = yield prisma_1.default.questao.findMany({
                where: dados,
                include: {
                    sistema: {
                        select: {
                            nome_sistema: true
                        }
                    },
                    modulo: {
                        select: {
                            nome_modulo: true
                        }
                    },
                    submodulo: {
                        select: {
                            nome_submodulo: true
                        }
                    }
                }
            });
            return buscaquestao.map((questao) => {
                var _a, _b, _c;
                return ({
                    id_questao: questao.id_questao,
                    status: questao.status,
                    questoes: questao.questao,
                    id_sistema: questao.id_sistema,
                    nome_sistema: (_a = questao.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                    id_modulo: questao.id_modulo,
                    nome_modulo: (_b = questao.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                    id_submodulo: questao.id_submodulo,
                    nome_submodulo: (_c = questao.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                    id_prova: questao.id_prova,
                    alternativa_A: questao.alternativa_A,
                    alternativa_B: questao.alternativa_B,
                    alternativa_C: questao.alternativa_C || null,
                    alternativa_D: questao.alternativa_D || null,
                    correta: questao.correta,
                });
            });
        });
    }
}
exports.ServicoListarQuestao = ServicoListarQuestao;
