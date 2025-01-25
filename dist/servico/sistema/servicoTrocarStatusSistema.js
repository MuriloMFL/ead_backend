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
exports.ServicoTrocarStatusSistema = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoTrocarStatusSistema {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_sistema }) {
            try {
                const verificaStatus = yield prisma_1.default.sistema.findFirst({
                    where: {
                        id_sistema: Number(id_sistema),
                        status: true
                    }
                });
                if (verificaStatus) {
                    const sistema = yield prisma_1.default.sistema.update({
                        data: {
                            status: false,
                            data_inativo: new Date()
                        },
                        where: {
                            id_sistema: Number(id_sistema)
                        }
                    });
                    return sistema;
                }
                else {
                    const sistema = yield prisma_1.default.sistema.update({
                        data: {
                            status: true,
                            data_inativo: new Date()
                        },
                        where: {
                            id_sistema: Number(id_sistema)
                        }
                    });
                    return sistema;
                }
            }
            catch (erro) {
                throw new Error('Erro ao atualizar Status do cadastro');
            }
        });
    }
}
exports.ServicoTrocarStatusSistema = ServicoTrocarStatusSistema;
