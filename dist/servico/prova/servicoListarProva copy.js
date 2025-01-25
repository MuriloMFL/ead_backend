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
exports.ServicoListarProva = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarProva {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const buscanota = yield prisma_1.default.mv_Prova.findFirst({
                where: {
                    id_prova: Number(filtros.id_prova)
                }, select: {
                    nota: true
                }
            });
            const dados = {
                id_prova: filtros.id_prova,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
                id_submodulo: filtros.id_submodulo,
                nome_prova: filtros.nome_prova ? { contains: filtros.nome_prova, mode: client_1.Prisma.QueryMode.insensitive } : undefined,
                status: filtros.status
            };
            const buscaprova = yield prisma_1.default.prova.findMany({
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
            return buscaprova.map((prova) => {
                var _a, _b, _c;
                return ({
                    id_prova: prova.id_prova,
                    id_sistema: prova.id_sistema,
                    nome_sistema: (_a = prova.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                    id_modulo: prova.id_modulo,
                    nome_modulo: (_b = prova.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                    id_submodulo: prova.id_submodulo,
                    nome_submodulo: (_c = prova.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                    nome_prova: prova.nome_prova,
                    status: prova.status,
                });
            });
        });
    }
}
exports.ServicoListarProva = ServicoListarProva;
