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
exports.ServicoListarAula = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarAula {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                nome_aula: filtros.nome_aula ? { contains: filtros.nome_aula, mode: client_1.Prisma.QueryMode.insensitive } : undefined,
                status: filtros.status
            };
            const buscaaula = yield prisma_1.default.aula.findMany({
                where: dados,
                include: {
                    sistema: {
                        select: { nome_sistema: true }
                    },
                    modulo: {
                        select: { nome_modulo: true }
                    },
                    submodulo: {
                        select: { nome_submodulo: true }
                    }
                }
            });
            return buscaaula.map((aula) => {
                var _a, _b, _c;
                return ({
                    id_aula: aula.id_aula,
                    id_sistema: aula.id_sistema,
                    nome_sistema: (_a = aula.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                    id_modulo: aula.id_modulo,
                    nome_modulo: (_b = aula.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                    id_submodulo: aula.id_submodulo,
                    nome_submodulo: (_c = aula.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                    nome_aula: aula.nome_aula,
                    status: aula.status
                });
            });
        });
    }
}
exports.ServicoListarAula = ServicoListarAula;
