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
exports.ServicoCriarSistema = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoCriarSistema {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome_sistema }) {
            const verificarSistemaExiste = yield prisma_1.default.sistema.findFirst({
                where: {
                    nome_sistema: nome_sistema
                }
            });
            if (verificarSistemaExiste) {
                throw new Error('Sistema já existe!!');
            }
            try {
                const sistema = yield prisma_1.default.sistema.create({
                    data: {
                        nome_sistema: nome_sistema,
                    }, select: {
                        nome_sistema: true,
                        status: true
                    }
                });
                return sistema;
            }
            catch (Erro) {
                throw new Error('Erro ao salvar novo sistema');
            }
        });
    }
}
exports.ServicoCriarSistema = ServicoCriarSistema;
