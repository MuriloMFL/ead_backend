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
exports.ServicoListarUsuarioPorFranquia = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarUsuarioPorFranquia {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                id_usuario: filtros.id_usuario,
                nome_usuario: filtros.nome_usuario
                    ? { contains: filtros.nome_usuario, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                id_franquia: filtros.id_franquia
            };
            const buscaFranquia = yield prisma_1.default.usuario.findMany({
                where: dados,
                include: {
                    franquia: {
                        select: { nome: true }
                    }
                }
            });
            return buscaFranquia.map((usuario) => {
                var _a;
                return ({
                    id_usuario: usuario.id_usuario,
                    nome_usuario: usuario.nome_usuario,
                    id_franquia: usuario.id_franquia,
                    nome_franquia: (_a = usuario.franquia) === null || _a === void 0 ? void 0 : _a.nome,
                    email: usuario.email,
                    login: usuario.login,
                    status: usuario.status
                });
            });
        });
    }
}
exports.ServicoListarUsuarioPorFranquia = ServicoListarUsuarioPorFranquia;
