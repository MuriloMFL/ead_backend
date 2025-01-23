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
exports.ServicoListarSistema = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarSistema {
    executar(filtro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const buscasistema = yield prisma_1.default.sistema.findMany({
                    where: {
                        status: filtro.status,
                        nome_sistema: filtro.nome_sistema ? { contains: filtro.nome_sistema, mode: 'insensitive' } : undefined,
                    }, select: {
                        id_sistema: true,
                        nome_sistema: true,
                        status: true
                    }
                });
                return buscasistema.map((sistema) => ({
                    id_sistema: sistema.id_sistema,
                    nome_sistema: sistema.nome_sistema,
                    status: sistema.status
                }));
            }
            catch (_a) {
                throw new Error('Erro ao buscar sistemas cadastrados');
            }
        });
    }
}
exports.ServicoListarSistema = ServicoListarSistema;
