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
exports.ServicoCriarMvProva = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoCriarMvProva {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_sistema, id_submodulo, id_modulo, id_usuario, id_franquia, id_prova }) {
            const total = yield prisma_1.default.mv_Questao.count({
                where: {
                    id_prova: Number(id_prova),
                    id_usuario: Number(id_usuario)
                }
            });
            const QuestoesCertas = yield prisma_1.default.mv_Questao.count({
                where: {
                    id_prova: Number(id_prova),
                    id_usuario: Number(id_usuario),
                    certo_errado: 'C'
                }
            });
            const nota = total > 0 ? parseFloat((QuestoesCertas / total).toFixed(2)) : 0.00;
            const notaporcentagem = (nota * 100);
            if (notaporcentagem === 0) {
                return;
            }
            const verificaSeExiste = yield prisma_1.default.mv_Prova.findFirst({
                where: {
                    id_sistema: Number(id_sistema),
                    id_submodulo: Number(id_submodulo),
                    id_modulo: Number(id_modulo),
                    id_usuario: Number(id_usuario),
                    id_franquia: Number(id_franquia),
                    id_prova: Number(id_prova)
                }
            });
            if (!verificaSeExiste) {
                try {
                    const prova_mv = yield prisma_1.default.mv_Prova.create({
                        data: {
                            id_sistema: Number(id_sistema),
                            id_submodulo: Number(id_submodulo),
                            id_modulo: Number(id_modulo),
                            id_usuario: Number(id_usuario),
                            id_franquia: Number(id_franquia),
                            id_prova: Number(id_prova),
                            nota: notaporcentagem
                        }
                    });
                    return prova_mv;
                }
                catch (error) {
                    throw new Error('Erro no servico de criar mv prova');
                }
            }
        });
    }
}
exports.ServicoCriarMvProva = ServicoCriarMvProva;
