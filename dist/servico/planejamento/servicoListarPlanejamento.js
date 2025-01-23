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
exports.ServicoListarPlanejamento = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarPlanejamento {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ filtros }) {
            const dados = {
                id_planejamento: filtros.id_planejamento,
                nome_planejamento: filtros.nome_planejamento ? { contains: filtros.nome_planejamento, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                etapa_finalizado: filtros.etapa_finalizado
            };
            const buscaplanejamento = yield prisma_1.default.planejamento.findMany({
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
                    },
                    usuario: {
                        select: { nome_usuario: true }
                    }
                }
            });
            return buscaplanejamento.map((planejamento) => {
                var _a, _b, _c, _d;
                return ({
                    id_planejamento: planejamento.id_planejamento,
                    nome_planejamento: planejamento.nome_planejamento,
                    id_sistema: planejamento.id_sistema,
                    nome_sistema: ((_a = planejamento.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema) || null,
                    id_modulo: planejamento.id_modulo,
                    nome_modulo: (_b = planejamento.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                    id_submodulo: planejamento.id_submodulo,
                    nome_submodulo: (_c = planejamento.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                    id_usuario: planejamento.usuario,
                    nome_usuario: (_d = planejamento.usuario) === null || _d === void 0 ? void 0 : _d.nome_usuario,
                    etapa_finalizado: planejamento.etapa_finalizado,
                    status: planejamento.status
                });
            });
        });
    }
}
exports.ServicoListarPlanejamento = ServicoListarPlanejamento;
