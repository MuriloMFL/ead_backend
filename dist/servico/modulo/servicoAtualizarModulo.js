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
exports.ServicoAtualizarModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoAtualizarModulo {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_modulo, nome_modulo, id_sistema }) {
            try {
                const modulo = yield prisma_1.default.modulo.update({
                    where: {
                        id_modulo: Number(id_modulo)
                    }, data: {
                        nome_modulo: nome_modulo,
                        id_sistema: Number(id_sistema)
                    }, select: {
                        id_modulo: true,
                        nome_modulo: true,
                        id_sistema: true,
                        sistema: {
                            select: {
                                nome_sistema: true
                            }
                        }
                    }
                });
                return modulo;
            }
            catch (erro) {
                throw new Error('Erro ao atualizar Modulo');
            }
        });
    }
}
exports.ServicoAtualizarModulo = ServicoAtualizarModulo;
