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
exports.ServicoDetalharSistema = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoDetalharSistema {
    executar(id_sistema) {
        return __awaiter(this, void 0, void 0, function* () {
            const verificaSeExiste = yield prisma_1.default.sistema.findFirst({
                where: { id_sistema: id_sistema }
            });
            if (!verificaSeExiste) {
                throw new Error('Sistema não encontrado.');
            }
            try {
                const sistema = yield prisma_1.default.sistema.findFirst({
                    where: {
                        id_sistema: id_sistema
                    },
                    select: {
                        id_sistema: true,
                        nome_sistema: true,
                        status: true
                    }
                });
                return sistema;
            }
            catch (_a) {
                throw new Error('Erro ao detalhar sistema');
            }
        });
    }
}
exports.ServicoDetalharSistema = ServicoDetalharSistema;
