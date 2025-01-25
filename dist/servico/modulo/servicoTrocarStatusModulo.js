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
exports.ServicoTrocarStatusModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoTrocarStatusModulo {
    executar(id_modulo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verificaStatus = yield prisma_1.default.modulo.findFirst({
                    where: {
                        id_modulo: id_modulo,
                        status: true
                    }
                });
                if (verificaStatus) {
                    const modulo = yield prisma_1.default.modulo.update({
                        data: {
                            status: false,
                            data_inativo: new Date()
                        },
                        where: {
                            id_modulo: Number(id_modulo)
                        }
                    });
                    return modulo;
                }
                else {
                    const modulo = yield prisma_1.default.modulo.update({
                        data: {
                            status: true,
                            data_inativo: new Date()
                        },
                        where: {
                            id_modulo: Number(id_modulo)
                        }
                    });
                    return modulo;
                }
            }
            catch (erro) {
                throw new Error('Erro ao atualizar Status do cadastro');
            }
        });
    }
}
exports.ServicoTrocarStatusModulo = ServicoTrocarStatusModulo;
