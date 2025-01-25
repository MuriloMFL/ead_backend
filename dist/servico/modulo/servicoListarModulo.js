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
exports.ServicoListarModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("@prisma/client"); // Importando a enum Prisma.QueryMode
class ServicoListarModulo {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const filtro = {
                nome_modulo: filtros.nome_modulo
                    ? { contains: filtros.nome_modulo, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
            };
            const Buscamodulos = yield prisma_1.default.modulo.findMany({
                where: filtro,
                include: {
                    sistema: {
                        select: {
                            nome_sistema: true,
                        },
                    },
                },
            });
            return Buscamodulos.map((modulo) => {
                var _a;
                return ({
                    id_modulo: modulo.id_modulo,
                    nome_modulo: modulo.nome_modulo,
                    nome_sistema: ((_a = modulo.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema) || null,
                    status: modulo.status,
                });
            });
        });
    }
}
exports.ServicoListarModulo = ServicoListarModulo;
