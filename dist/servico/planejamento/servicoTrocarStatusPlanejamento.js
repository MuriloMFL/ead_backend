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
exports.ServicoTrocarStatusPlanejamento = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoTrocarStatusPlanejamento {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_planejamento }) {
            const verificaStatus = yield prisma_1.default.planejamento.findFirst({
                where: {
                    id_planejamento: Number(id_planejamento)
                }
            });
            try {
                if (verificaStatus.status) {
                    const planejamento = prisma_1.default.planejamento.update({
                        data: {
                            status: false,
                            data_inativo: new Date()
                        }, where: {
                            id_planejamento: Number(id_planejamento)
                        }
                    });
                    return planejamento;
                }
                else {
                    const planejamento = prisma_1.default.planejamento.update({
                        data: {
                            status: true,
                        }, where: {
                            id_planejamento: Number(id_planejamento)
                        }
                    });
                    return planejamento;
                }
            }
            catch (error) {
                throw new Error('Erro no servico de trocar status do planejamento');
            }
        });
    }
}
exports.ServicoTrocarStatusPlanejamento = ServicoTrocarStatusPlanejamento;
